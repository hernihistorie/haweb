import type { Event } from "./event";

// Auto-discover all events using Vite's glob import.
// Each event lives in its own directory, e.g. `./besitka-2025/event.ts`.
// Posts import their event directly, so only code that needs the full list should import this.
const eventModules = import.meta.glob<{ default: Event }>("./*/event.ts", {
    eager: true,
});

export const eventsBySlug: Record<string, Event> = Object.fromEntries(
    Object.entries(eventModules).map(([path, module]) => {
        const event = module.default;
        const directory = path.split("/")[1];
        if (directory !== event.slug) {
            throw new Error(`Event ${path} has slug "${event.slug}" but is in ${directory}/`);
        }
        return [event.slug, event];
    }),
);
