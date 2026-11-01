<script lang="ts">
    import Meta from "$src/lib/components/layout/Meta.svelte";
    import Loc from "$src/lib/components/Loc.svelte";
    import SocialMediaLinks from "$src/lib/components/layout/SocialMediaLinks/SocialMediaLinks.svelte";
    import ArticleCard from "./ArticleCard.svelte";
    import PostBoxes from "./PostBoxes.svelte";
    import PostYearNav from "./PostYearNav.svelte";
    import PostKindMenu from "./PostKindMenu.svelte";
    import RssIcon from "@lucide/svelte/icons/rss";
    import { loc } from "$src/lib/loc";
    import { postKinds } from "$src/lib/posts";
    import { getLocale, localizeHref } from "#lib/paraglide/runtime.js";
    import type { Post, PostKind } from "$src/types";
    import Notice from "../Notice.svelte";

    interface Props {
        kind: PostKind;
        posts: Post[];
        /** Years to offer in the navigation, or null if this kind isn't split by year */
        years: number[] | null;
        activeYear?: number | null;
    }

    let { kind, posts, years, activeYear = null }: Props = $props();

    // Kinds whose listings are switched between with a menu instead of a heading
    const menuKinds: PostKind[] = ["article", "video"];

    const title = $derived(postKinds[kind].title);
</script>

<Meta title={activeYear ? `${loc(title)} (${activeYear})` : title} />

{#snippet heading()}
    {#if menuKinds.includes(kind)}
        <PostKindMenu kinds={menuKinds} active={kind} />
    {:else}
        <h2>
            <Loc text={title} />{#if activeYear}&nbsp;({activeYear}){/if}
        </h2>
    {/if}
{/snippet}

{#snippet yearNav()}
    {#if years}
        <PostYearNav {kind} {years} {activeYear} />
    {/if}
{/snippet}

{#if kind === "news"}
    <div class="news-layout">
        <div class="news-header">
            {@render heading()}
            {@render yearNav()}
        </div>
        <div class="feed">
            <PostBoxes {posts} newsLayout="feed" />
            {@render yearNav()}
        </div>
        <aside data-pagefind-ignore>
            <div class="follow">
                <h3><Loc cs="Sledujte nás" en="Follow us" /></h3>
                <p>
                    <Loc
                        cs="Krátké zprávy o tom, co se děje v archivu, sdílíme i na sociálních sítích."
                        en="We also share short updates on what's happening in the archive on social media."
                    />
                </p>
                <SocialMediaLinks />
                <a href={getLocale() === "en" ? "/en/feed.xml" : "/feed.xml"} class="rss">
                    <RssIcon size={20} />
                    <Loc cs="Odebírat přes RSS" en="Subscribe via RSS" />
                </a>
            </div>
        </aside>
    </div>
{:else}
    {@render heading()}
    {@render yearNav()}
    {#if kind === "article" && !activeYear && posts.length > 0}
        <div class="featured" data-pagefind-ignore>
            <ArticleCard post={posts[0]} featured />
        </div>
        <PostBoxes posts={posts.slice(1)} />
    {:else}
        <PostBoxes {posts} />
    {/if}
    {@render yearNav()}
    {#if kind === "article"}
        <div style="margin: 2rem 0;"></div>
        <Notice>
            <Loc>
                {#snippet cs()}
                    <p>
                        <strong
                            >Máte nápad na vlastní článek na téma související s herní historií?</strong
                        >
                    </p>
                    <p>
                        Dejte se s námi <a href={localizeHref("/contact")}>v kontaktu</a>, například
                        po mailu info@herniarchiv.cz. Rádi s vámi článek prokonzultujeme, pomůžeme s
                        jeho zpracováním a připravíme publikaci.
                    </p>
                {/snippet}
                {#snippet en()}
                    <p>
                        <strong
                            >Do you have an idea for your own article on a topic related to game
                            history?</strong
                        >
                    </p>
                    <p>
                        Get in <a href={localizeHref("/contact")}>touch with us</a>, for example by
                        e-mail at info@herniarchiv.cz. We'll be happy to discuss the article with
                        you, help with its preparation, and arrange for its publication. English is
                        not a problem for us!
                    </p>
                {/snippet}
            </Loc>
        </Notice>
    {/if}
{/if}

<style>
    .news-layout {
        display: grid;
        grid-template-columns: minmax(0, 640px) 300px;
        grid-template-areas:
            "header ."
            "feed aside";
        justify-content: center;
        column-gap: 48px;
    }

    .news-header {
        grid-area: header;
    }

    .feed {
        grid-area: feed;
    }

    aside {
        grid-area: aside;
    }

    .follow {
        position: sticky;
        top: 2em;
        padding: 16px 20px;
        border: 2px solid var(--color-secondary-transparent);
        border-radius: 16px;
    }

    .follow h3 {
        font-size: 22px;
        margin: 0 0 0.4em 0;
    }

    .follow p {
        margin-top: 0;
        line-height: 1.4;
    }

    .follow :global(.social-media-links a) {
        color: var(--color-secondary);
    }

    .rss {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 12px;
        text-decoration: none;
    }

    .rss:hover {
        text-decoration: underline;
    }

    .featured {
        max-width: 60em;
        padding-bottom: 48px;
        margin-bottom: 48px;
        border-bottom: 2px solid var(--color-secondary-transparent);
    }

    @media screen and (max-width: 1000px) {
        .news-layout {
            grid-template-columns: minmax(0, 640px);
            grid-template-areas:
                "header"
                "feed"
                "aside";
            row-gap: 32px;
        }
    }
</style>
