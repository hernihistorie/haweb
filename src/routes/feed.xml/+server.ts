import type { RequestHandler } from './$types';
import { generateAtomFeed, createFeedResponse } from '$lib/feed';
import { getLocale } from '$lib/components/paraglide/runtime';

export const GET: RequestHandler = async () => {
    const feed = generateAtomFeed(
        getLocale() == 'cs' ? {
            lang: 'cs',
            title: 'Herní archiv - Blog',
            subtitle: 'Novinky z Československého herního archivu',
            feedPath: '/feed.xml'
        } : {
            lang: 'en',
            title: 'Game Archive - Blog',
            subtitle: 'News from the Czechoslovak Game Archive',
            feedPath: '/en/feed.xml'
        }
    );
    
    return createFeedResponse(feed);
};

export const prerender = true;
