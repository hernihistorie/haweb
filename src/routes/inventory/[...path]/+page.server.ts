const RHINVENTORY_URL = 'https://inventory.herniarchiv.cz/';

import { error } from '@sveltejs/kit';
import { parse } from 'node-html-parser';

export async function load({ params, url }) {
    // remove trailing slash from path
    const path = params.path.endsWith('/') ? params.path.slice(0, -1) : params.path;

    const target = new URL(`/${path}${url.search}`, RHINVENTORY_URL);

    console.log(`Fetching from rhinventory: ${target.href}`);

    const res = await fetch(target);
    
    if (!res.ok) {
        if (res.status === 404) {
            return error(404, 'Page not found');
        }
        throw new Error(`Failed to fetch from rhinventory: ${res.status} ${res.statusText}`);
    }

    const raw = await res.text();

    const root = parse(raw);

    if (!root.querySelector('body')) {
        throw new Error('Unexpected response from rhinventory: no body element found.  Either the response is not a HTML document, or it is malformed.');
    }

    const rewriteAttr = (selector: string, attr: string) => {
        for (const el of root.querySelectorAll(selector)) {
            const val = el.getAttribute(attr);
            if (val?.startsWith('/static') || val?.startsWith('/files')) {
                el.setAttribute(attr, `https://inventory.herniarchiv.cz${val}`);
            } else if (val?.startsWith('/')) {
                el.setAttribute(attr, `/inventory${val}`);
            }
        }
    };

    rewriteAttr('a', 'href');
    rewriteAttr('form', 'action');
    rewriteAttr('img', 'src');
    rewriteAttr('script', 'src');
    rewriteAttr('link', 'href');

    const body = root.querySelector('body')?.innerHTML;

    return { html: body };
}