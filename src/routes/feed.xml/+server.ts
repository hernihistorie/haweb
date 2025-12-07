import type { RequestHandler } from './$types';
import { generateAtomFeed, createFeedResponse } from '$lib/feed';

export const GET: RequestHandler = async () => {
    const feed = generateAtomFeed({
        lang: 'cs',
        title: 'Herní archiv - Blog',
        subtitle: 'Novinky z Československého herního archivu',
        feedPath: '/feed.xml'
    });
    
    return createFeedResponse(feed);
};

export const prerender = true;
