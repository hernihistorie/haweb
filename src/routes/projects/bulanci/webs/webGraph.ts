import type { BulanciHostingType } from "$src/data/bulanci/webs.server";
import type {
    BulanciWebGraph,
    BulanciWebGraphNode,
    BulanciWebLink,
} from "$src/data/bulanci/webGraph.server";
import type { LocalizedString } from "$src/types";
import type { HTMLAnchorAttributes } from "svelte/elements";
import type { BulanciWebListItem } from "./webList";

export const HOSTING_TYPE_LABELS: Record<BulanciHostingType, LocalizedString> = {
    webhosting: { cs: "Webhosting zdarma", en: "Free web hosting" },
    blog: { cs: "Blogovací platforma", en: "Blogging platform" },
    builder: { cs: "Stavebnice webů", en: "Website builder" },
};

export const HOSTING_TYPES = Object.keys(HOSTING_TYPE_LABELS) as BulanciHostingType[];

export const UNKNOWN_HOSTING_LABEL: LocalizedString = {
    cs: "Neznámý / vlastní",
    en: "Unknown / own",
};

export const webHostingType = ({
    services,
}: Pick<BulanciWebListItem, "services">): BulanciHostingType | null => services[0]?.type ?? null;

/** A CSS color from webGraph.css */
export const hostingColor = (type: BulanciHostingType | null): string =>
    `var(--web-${type ?? "unknown"})`;

/** The website whose links are highlighted, and those it's linked with */
export type WebHighlight = { id: number; related: Set<number> };

/** What the network and the timeline have in common */
export type WebGraphViewProps = {
    /** All websites, in the order they were started */
    webs: BulanciWebListItem[];
    graph: BulanciWebGraph;
    /** The links to draw */
    links: BulanciWebLink[];
    /** Number of links to each website from other fan websites */
    inboundCounts: Map<number, number>;
    highlight: WebHighlight | null;
    /** Websites that match the filters; null if there aren't any filters */
    matching: Set<number> | null;
    /** Attributes of the link to each website */
    nodeProps: (web: BulanciWebListItem) => HTMLAnchorAttributes;
};

export function isWebDimmed(
    id: number,
    { highlight, matching }: Pick<WebGraphViewProps, "highlight" | "matching">,
): boolean {
    if (highlight) return id !== highlight.id && !highlight.related.has(id);
    return matching !== null && !matching.has(id);
}

/** Center of a website's window in the network, without the label below it */
const windowCenter = ({ x, y, width, height }: BulanciWebGraphNode) => ({
    x,
    y: y - height / 2 + (width * 0.75) / 2,
});

/** The SVG path of a link in the network, curved to its right, so that mutual ones don't overlap */
export function networkLinkPath(source: BulanciWebGraphNode, target: BulanciWebGraphNode): string {
    const a = windowCenter(source);
    const b = windowCenter(target);
    const controlX = (a.x + b.x) / 2 - (b.y - a.y) * 0.16;
    const controlY = (a.y + b.y) / 2 + (b.x - a.x) * 0.16;
    return `M${a.x},${a.y}Q${controlX},${controlY} ${b.x},${b.y}`;
}

/** Classes of a link in the graph, see WebLinks.svelte */
export function webLinkClasses(
    { source, target, defunct }: BulanciWebLink,
    { highlight, matching }: Pick<WebGraphViewProps, "highlight" | "matching">,
) {
    const outbound = highlight?.id === source;
    const inbound = highlight?.id === target;
    return {
        defunct,
        outbound,
        inbound,
        dimmed: highlight
            ? !outbound && !inbound
            : matching !== null && !(matching.has(source) && matching.has(target)),
    };
}
