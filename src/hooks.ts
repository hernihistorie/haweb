import { deLocalizeUrl } from '$lib/components/paraglide/runtime';

export const reroute = (request) => deLocalizeUrl(request.url).pathname;
