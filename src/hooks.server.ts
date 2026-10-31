import type { Handle } from "@sveltejs/kit/hooks";
import { paraglideMiddleware } from "#lib/paraglide/server.js";

const handleParaglide: Handle = ({ event, resolve }) =>
    // The `reroute` hook delocalizes URLs for routing, so keep the original request
    paraglideMiddleware(event.request, ({ locale }) =>
        resolve(event, {
            transformPageChunk: ({ html }) => html.replace("%paraglide.lang%", locale),
        }),
    );

export const handle: Handle = handleParaglide;
