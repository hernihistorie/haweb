import { forceLink, forceManyBody, forceSimulation, forceX, forceY } from "d3-force";
import { webMetadata } from "./webs.server";

export type BulanciWebLink = {
    /** ID of the website with the link */
    source: number;
    /** ID of the website it links to */
    target: number;
    /** The linked website's last known year is before the linking one's first */
    defunct: boolean;
    /** The link is to or from the official website */
    official: boolean;
};

/** Where a website is drawn in the network */
export type BulanciWebGraphNode = {
    id: number;
    /** Center of the website's window along with its label */
    x: number;
    y: number;
    /** Width of the window; its height follows from the 4:3 screenshot */
    width: number;
    /** Height of the window along with its label */
    height: number;
};

/** The websites started in a year */
export type BulanciWebGraphColumn = { year: number; x: number; width: number };

export type BulanciWebGraph = {
    /** Linked by almost everyone, so its links are only shown when pointing at it */
    officialId: number;
    /** In the order they were started */
    nodes: BulanciWebGraphNode[];
    links: BulanciWebLink[];
    columns: BulanciWebGraphColumn[];
    width: number;
    height: number;
};

const OFFICIAL_DOMAIN = "bulanci.cz";

const WIDTH = 1352;
const HEIGHT = 1060;
/** Space above the windows for the years */
const HEADER_HEIGHT = 40;
const LABEL_HEIGHT = 38;
/** A year's column is at least as wide as if this many websites were started in it */
const MIN_COLUMN_WEBS = 4;
const OFFICIAL_WINDOW_WIDTH = 112;
/** A label may be wider than its window */
const MIN_LABEL_WIDTH = 78;
/** Gaps between windows */
const GAP = { x: 14, y: 10 };

type LayoutNode = BulanciWebGraphNode & { column: BulanciWebGraphColumn };

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

/** Width of the window along with its label */
const outerWidth = ({ width }: LayoutNode) => Math.max(width, MIN_LABEL_WIDTH);

/** How much two windows overlap, including the gap; they only do if both are positive */
const overlap = (a: LayoutNode, b: LayoutNode, gap: { x: number; y: number }) => ({
    x: (outerWidth(a) + outerWidth(b)) / 2 + gap.x - Math.abs(a.x - b.x),
    y: (a.height + b.height) / 2 + gap.y - Math.abs(a.y - b.y),
});

function keepInColumn(node: LayoutNode) {
    const { column } = node;
    const min = column.x + outerWidth(node) / 2 + 4;
    const max = column.x + column.width - outerWidth(node) / 2 - 4;
    node.x = min < max ? clamp(node.x, min, max) : column.x + column.width / 2;
    node.y = clamp(node.y, HEADER_HEIGHT + node.height / 2, HEIGHT - node.height / 2 - 4);
}

/** Pushes overlapping windows apart, along the axis where they overlap less */
function separate(nodes: LayoutNode[]) {
    for (const [i, a] of nodes.entries()) {
        for (const b of nodes.slice(i + 1)) {
            const { x, y } = overlap(a, b, GAP);
            if (x <= 0 || y <= 0) continue;
            const axis = x < y ? "x" : "y";
            const shift = ((a[axis] < b[axis] ? -1 : 1) * Math.min(x, y)) / 2;
            a[axis] += shift;
            b[axis] -= shift;
        }
    }
}

/**
 * Resolves the overlaps left over where a column is too narrow, by moving windows only
 * vertically. Returns whether there were any.
 */
function separateVertically(nodes: LayoutNode[]): boolean {
    let moved = false;
    for (const [i, a] of nodes.entries()) {
        for (const b of nodes.slice(i + 1)) {
            const { x, y } = overlap(a, b, { x: 10, y: 6 });
            if (x <= 0 || y <= 0.1) continue;
            const shift = (a.y < b.y ? -1 : 1) * y * 0.3;
            a.y += shift;
            b.y -= shift;
            moved = true;
        }
    }
    return moved;
}

/**
 * Lays the websites out in columns by the year they were started, with linked websites close to
 * each other. The layout is deterministic, so it only changes with the data.
 */
function buildWebGraph(): BulanciWebGraph {
    const webs = webMetadata.toSorted((a, b) => a.startYear.year - b.startYear.year || a.id - b.id);
    const official = webs.find((web) => web.domain === OFFICIAL_DOMAIN);
    if (!official) throw new Error(`web_metadata.yaml: ${OFFICIAL_DOMAIN} is missing`);

    const websById = new Map(webs.map((web) => [web.id, web]));
    const links: BulanciWebLink[] = webs.flatMap((web) =>
        web.referencedIds.map((target) => ({
            source: web.id,
            target,
            defunct: (websById.get(target)!.endYear?.year ?? Infinity) < web.startYear.year,
            official: web === official || target === official.id,
        })),
    );
    const fanLinks = links.filter((link) => !link.official);

    const years = [...new Set(webs.map((web) => web.startYear.year))];
    const weights = years.map((year) =>
        Math.max(webs.filter((web) => web.startYear.year === year).length, MIN_COLUMN_WEBS),
    );
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    let x = 0;
    const columns = years.map((year, i): BulanciWebGraphColumn => {
        const column = { year, x, width: (WIDTH * weights[i]) / totalWeight };
        x += column.width;
        return column;
    });

    const nodes = webs.map((web): LayoutNode => {
        const column = columns.find((column) => column.year === web.startYear.year)!;
        const inbound = fanLinks.filter((link) => link.target === web.id).length;
        const width = web === official ? OFFICIAL_WINDOW_WIDTH : 62 + Math.sqrt(inbound) * 19;
        return {
            id: web.id,
            width,
            height: width * 0.75 + LABEL_HEIGHT,
            // Spread out arbitrarily, but always the same way
            x: column.x + column.width / 2 + ((web.id % 5) - 2) * 12,
            y: HEIGHT / 2 + ((web.id * 137) % 400) - 200,
            column,
        };
    });

    forceSimulation(nodes)
        .force(
            "link",
            forceLink<LayoutNode, { source: number; target: number }>(
                fanLinks.map(({ source, target }) => ({ source, target })),
            )
                .id((node) => node.id)
                .distance(90)
                .strength(0.12),
        )
        .force("charge", forceManyBody().strength(-420))
        .force("x", forceX<LayoutNode>(({ column }) => column.x + column.width / 2).strength(0.08))
        .force("y", forceY(HEIGHT / 2).strength(0.05))
        .force("separate", () => {
            for (let i = 0; i < 4; i++) {
                separate(nodes);
                nodes.forEach(keepInColumn);
            }
        })
        .stop()
        .tick(700);

    for (let i = 0; i < 3000 && separateVertically(nodes); i++) {
        nodes.forEach(keepInColumn);
    }

    const round = (value: number) => Math.round(value * 10) / 10;
    return {
        officialId: official.id,
        nodes: nodes.map(({ id, x, y, width, height }) => ({
            id,
            x: round(x),
            y: round(y),
            width: round(width),
            height: round(height),
        })),
        links,
        columns: columns.map(({ year, x, width }) => ({ year, x: round(x), width: round(width) })),
        width: WIDTH,
        height: HEIGHT,
    };
}

export const bulanciWebGraph = buildWebGraph();
