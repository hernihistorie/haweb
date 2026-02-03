import { Temporal } from '@js-temporal/polyfill';
import { blogPosts } from '$src/routes/blog/blog_posts';
import type { LanguageCode } from '$src/types';

const SITE_URL = 'https://herniarchiv.cz';

function escapeXml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').trim();
}

function getTitle(post: typeof blogPosts[0], lang: LanguageCode): string {
    if (typeof post.title === 'string') {
        return post.title;
    }
    return lang === 'en' 
        ? (post.title.en ?? post.title.cs ?? '')
        : (post.title.cs ?? post.title.en ?? '');
}

interface FeedConfig {
    lang: LanguageCode;
    title: string;
    subtitle: string;
    feedPath: string;
}

function plainDateToISOString(date: Temporal.PlainDate): string {
    // Convert PlainDate to full ISO datetime string (midnight UTC)
    return `${date.toString()}T00:00:00Z`;
}

export function generateAtomFeed(config: FeedConfig): string {
    const { lang, title, subtitle, feedPath } = config;
    
    const latestPosts = [...blogPosts]
        .filter(post => post.date)
        .sort((a, b) => Temporal.PlainDate.compare(b.date!, a.date!))
        .slice(0, 10);

    const lastUpdated = latestPosts[0]?.date 
        ? plainDateToISOString(latestPosts[0].date) 
        : new Date().toISOString();

    return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <title>${escapeXml(title)}</title>
    <subtitle>${escapeXml(subtitle)}</subtitle>
    <link href="${SITE_URL}${feedPath}" rel="self" type="application/atom+xml"/>
    <link href="${SITE_URL}/blog" rel="alternate" type="text/html"/>
    <id>${SITE_URL}${feedPath}</id>
    <updated>${lastUpdated}</updated>
    <author>
        <name>Herní historie</name>
    </author>
${latestPosts.map(post => {
    const postTitle = escapeXml(getTitle(post, lang));
    const url = `${SITE_URL}/blog/${post.id}-${post.slug}`;
    const descriptionHtml = typeof post.description_html === 'string' 
        ? post.description_html 
        : (lang === 'en' 
            ? (post.description_html?.en ?? post.description_html?.cs ?? '') 
            : (post.description_html?.cs ?? post.description_html?.en ?? ''));
    const description = descriptionHtml ? escapeXml(stripHtml(descriptionHtml)) : '';
    const date = post.date ? plainDateToISOString(post.date) : new Date().toISOString();
    
    return `    <entry>
        <title>${postTitle}</title>
        <link href="${url}" rel="alternate" type="text/html"/>
        <id>${url}</id>
        <author>${post.author.name}</author>
        <published>${date}</published>
        <updated>${date}</updated>
        <summary>
            ${post.image ? `<p><img src="${SITE_URL}${post.image}" /></p>` : ''}
            <p>${description}</p>
        </summary>
    </entry>`;
}).join('\n')}
</feed>`;
}

export function createFeedResponse(feed: string): Response {
    return new Response(feed, {
        headers: {
            'Content-Type': 'application/atom+xml; charset=utf-8',
            'Cache-Control': 'max-age=3600'
        }
    });
}
