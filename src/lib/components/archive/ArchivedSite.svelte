<script module lang="ts">
    /** A screenshot built by vite-imagetools with `as=srcset` */
    export type ArchivedSiteImage = {
        /** Fallback (smallest) URL */
        src: string;
        srcset: string;
    };
</script>

<script lang="ts">
    import Loc from "#lib/components/Loc.svelte";
    import { loc } from "$src/lib/loc";
    import { waybackFrameUrl, waybackUrl } from "$src/lib/wayback";
    import IconExternalLink from "@lucide/svelte/icons/external-link";
    import IconImage from "@lucide/svelte/icons/image";
    import IconPlay from "@lucide/svelte/icons/play";
    import BrowserWindow from "./BrowserWindow.svelte";
    import type { Attachment } from "svelte/attachments";

    interface Props {
        /** The original URL of the page */
        url: string;
        /** When the page was captured, as YYYYMMDDhhmmss */
        timestamp: string;
        /** A screenshot of the page, shown until the archived copy is loaded */
        screenshot: ArchivedSiteImage | null;
        /** Value of the screenshot's `sizes` attribute */
        sizes: string;
        /** The site's name, for the window's and the frame's title */
        name: string;
        /** The window size the site was designed for; the frame is scaled down to fit */
        width?: number;
        height?: number;
        /** Load the screenshot right away, for screenshots at the top of the page */
        eager?: boolean;
    }

    let {
        url,
        timestamp,
        screenshot,
        sizes,
        name,
        width = 800,
        height = 600,
        eager = false,
    }: Props = $props();

    /**
     * The archived copy is only loaded on request: the Wayback Machine is slow, and may be
     * unavailable or stop allowing to be framed
     */
    let browsing = $state(false);
    let loaded = $state(false);
    let viewportWidth = $state(0);

    const frameSrc = $derived(waybackFrameUrl(url, timestamp));
    /** The usual snapshot page, with the Wayback Machine's toolbar */
    const snapshotHref = $derived(waybackUrl(url, timestamp));

    const windowTitle = $derived(`${name} – ${loc({ cs: "Webový archiv", en: "Web Archive" })}`);
    const status = $derived(
        browsing && !loaded
            ? loc({ cs: "Otevírání stránky", en: "Opening page" }) + ` ${url}…`
            : loc({ cs: "Hotovo", en: "Done" }),
    );

    /** Whether the copy was closed, so the focus goes back to the button that opened it */
    let closed = $state(false);

    function stopBrowsing() {
        closed = true;
        browsing = false;
        loaded = false;
    }

    /** Keeps the keyboard focus, which was on a button that got replaced */
    const focus: Attachment<HTMLElement> = (element) => element.focus();
</script>

<figure class="archived-site">
    <BrowserWindow title={windowTitle} {url} {status} onclose={browsing ? stopBrowsing : undefined}>
        <div
            class="viewport"
            style:aspect-ratio="{width} / {height}"
            bind:clientWidth={viewportWidth}>
            {#if screenshot}
                <img
                    src={screenshot.src}
                    srcset={screenshot.srcset}
                    {sizes}
                    alt={browsing
                        ? ""
                        : loc({ cs: "Snímek webu", en: "Screenshot of the website" })}
                    {width}
                    {height}
                    loading={eager ? "eager" : "lazy"}
                    decoding="async" />
            {/if}

            {#if browsing}
                <!--
                    Rendered at the original window size, then scaled down to fit. No top
                    navigation, so that the 2000s' frame-busting scripts can't take over this page.
                -->
                <iframe
                    src={frameSrc}
                    title={loc({ cs: "Archivovaná kopie webu", en: "Archived copy of" }) +
                        " " +
                        name}
                    {width}
                    {height}
                    class:loaded
                    style:transform="scale({viewportWidth / width || 1})"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    referrerpolicy="no-referrer"
                    onload={() => (loaded = true)}
                    {@attach focus}></iframe>
                {#if !loaded}
                    <p class="overlay status" role="status">
                        <Loc
                            cs="Načítání z Internet Archive…"
                            en="Loading from the Internet Archive…" />
                    </p>
                {/if}
            {:else}
                <button
                    class="overlay play"
                    onclick={() => (browsing = true)}
                    {@attach closed && focus}>
                    <span class="play-label">
                        <IconPlay size="1.1em" />
                        <Loc cs="Otevřít archivovanou kopii" en="Browse the archived copy" />
                    </span>
                </button>
            {/if}
        </div>
    </BrowserWindow>

    <figcaption>
        {#if browsing}
            <button class="link" onclick={stopBrowsing}>
                <IconImage size="1em" />
                <Loc cs="Zpět na snímek" en="Back to the screenshot" />
            </button>
        {/if}
        <a href={snapshotHref} target="_blank" rel="noopener">
            <Loc cs="Otevřít ve Wayback Machine" en="Open in the Wayback Machine" />
            <IconExternalLink size="0.9em" />
        </a>
    </figcaption>
</figure>

<style>
    figure {
        margin: 0;
    }

    .viewport {
        position: relative;
        overflow: hidden;
        background: var(--color-secondary-transparent);
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        border: 0;
        transform-origin: 0 0;
        /* Pages of the time expected the browser's white default background */
        background: #fff;
        /* The screenshot stays visible until the archived copy has loaded */
        opacity: 0;
        transition: opacity 0.2s;
    }

    iframe.loaded {
        opacity: 1;
    }

    .overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 1em;
        border: 0;
        border-radius: 0;
        color: #fff;
        background: #0005;
        font: inherit;
        text-align: center;
    }

    .play {
        cursor: pointer;
        background: #0000;
        transition: background 0.2s;
    }

    .play:hover,
    .play:focus-visible {
        background: #0003;
    }

    .play-label {
        display: inline-flex;
        align-items: center;
        gap: 0.4em;
        padding: 0.5em 1em;
        border-radius: 999px;
        border: 2px solid #fffc;
        background: #000b;
        font-weight: 600;
        box-shadow: 0 2px 8px #0006;
    }

    .play:hover .play-label,
    .play:focus-visible .play-label {
        background: #000;
    }

    .play-label :global(.lucide-icon) {
        margin: 0;
    }

    figcaption {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 0.25em 1.25em;
        padding: 0.4em 0 0;
        color: var(--color-text-muted);
        font-size: 0.85em;
        font-style: normal;
    }

    figcaption a,
    figcaption button {
        display: inline-flex;
        align-items: center;
        gap: 0.3em;
        color: inherit;
        text-decoration: none;
    }

    figcaption a:hover,
    figcaption a:focus-visible,
    figcaption button:hover,
    figcaption button:focus-visible {
        text-decoration: underline;
    }

    figcaption :global(.lucide-icon) {
        margin: 0;
    }
</style>
