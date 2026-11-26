import type {
    BulanciWebGraph,
    BulanciWebGraphNode,
    BulanciWebLink,
} from "$src/data/bulanci/webGraph.server";
import type { LocalizedString } from "$src/types";
import type { HTMLAnchorAttributes } from "svelte/elements";
import type { BulanciWebListItem } from "./webList";

/**
 * The hosting services common enough to get a color of their own in the graphs, by their key in
 * web_metadata.yaml. The rest share one color.
 */
const PROMINENT_SERVICES = { webzdarma: "webzdarma", "blog.cz": "blog", websnadno: "websnadno" };

/** A prominent hosting service, or any of the others */
export type HostingGroup = (typeof PROMINENT_SERVICES)[keyof typeof PROMINENT_SERVICES] | "other";

/** In the order of the legend */
export const HOSTING_GROUPS: HostingGroup[] = [...Object.values(PROMINENT_SERVICES), "other"];

export const OTHER_HOSTING_LABEL: LocalizedString = { cs: "Jiný hosting", en: "Other hosting" };

export const UNKNOWN_HOSTING_LABEL: LocalizedString = {
    cs: "Neznámý / vlastní",
    en: "Unknown / own",
};

/** The group of a hosting service by its key; null if the service is unknown */
export const hostingGroup = (serviceKey: string | null): HostingGroup | null =>
    serviceKey === null
        ? null
        : (PROMINENT_SERVICES[serviceKey as keyof typeof PROMINENT_SERVICES] ?? "other");

/** The group of the website's (first) hosting service */
export const webHostingGroup = ({
    services,
}: Pick<BulanciWebListItem, "services">): HostingGroup | null =>
    hostingGroup(services[0]?.key ?? null);

/** A CSS color from webGraph.css */
export const hostingColor = (group: HostingGroup | null): string =>
    `var(--web-${group ?? "unknown"})`;

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
    { source, target }: BulanciWebLink,
    { highlight, matching }: Pick<WebGraphViewProps, "highlight" | "matching">,
) {
    const outbound = highlight?.id === source;
    const inbound = highlight?.id === target;
    return {
        outbound,
        inbound,
        dimmed: highlight
            ? !outbound && !inbound
            : matching !== null && !(matching.has(source) && matching.has(target)),
    };
}
