import type { RequestHandler } from './$types';
import { generateAtomFeed, createFeedResponse } from '$lib/feed';

export const GET: RequestHandler = async () => {
    const feed = generateAtomFeed({
        lang: 'en',
        title: 'Game Archive - Blog',
        subtitle: 'News from the Czechoslovak Game Archive',
        feedPath: '/en/feed.xml'
    });
    
    return createFeedResponse(feed);
};

export const prerender = true;
