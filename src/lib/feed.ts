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

export function generateAtomFeed(config: FeedConfig): string {
    const { lang, title, subtitle, feedPath } = config;
    
    const latestPosts = [...blogPosts]
        .filter(post => post.date)
        .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0))
        .slice(0, 10);

    const lastUpdated = latestPosts[0]?.date?.toISOString() ?? new Date().toISOString();

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
    const description = post.description_html ? escapeXml(stripHtml(post.description_html)) : '';
    const date = post.date?.toISOString() ?? new Date().toISOString();
    
    return `    <entry>
        <title>${postTitle}</title>
        <link href="${url}" rel="alternate" type="text/html"/>
        <id>${url}</id>
        <published>${date}</published>
        <updated>${date}</updated>
        <summary>${description}</summary>
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
