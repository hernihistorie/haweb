<script lang="ts">
    import { afterNavigate, goto } from "$app/navigation";
    import { page } from "$app/state";
    import { localizeHref } from "#lib/paraglide/runtime.js";
    import type { EmbeddedApp } from "$src/lib/embedded";
    import type { Attachment } from "svelte/attachments";

    let {
        app,
        src,
        title = $bindable(""),

        /** Initial frame URL, under `app.framePrefix` */
        /** Title of the page in the frame */
    }: { app: EmbeddedApp; src: string; title?: string } = $props();

    let height = $state<number>();
    let loading = $state(false);

    // Recreate the frame on real navigations (e.g. back/forward or a haweb link),
    // but not when layout data is merely invalidated
    let navigationCount = $state(0);

    afterNavigate(({ type, shallow }) => {
        if (shallow && type === "goto") return;
        if (type !== "enter") navigationCount++;
    });

    /** Haweb URL of the page shown in the frame. */
    function canonicalHref(location: Location) {
        const path = location.pathname.slice(app.framePrefix.length);
        return localizeHref(`${app.prefix}${path}${location.search}`);
    }

    function syncTheme(doc: Document) {
        const theme = document.documentElement.dataset.theme;
        if (theme) doc.documentElement.dataset.theme = theme;
    }

    const frame: Attachment<HTMLIFrameElement> = (iframe) => {
        let navigated = false;

        const onload = () => {
            loading = false;

            const win = iframe.contentWindow as (Window & typeof globalThis) | null;
            const doc = iframe.contentDocument;
            if (!win || !doc) return;

            title = doc.title;
            syncTheme(doc);

            const href = canonicalHref(win.location);
            if (href !== location.pathname + location.search) {
                goto(href, { shallow: true, replace: true, state: page.state });
            }

            // Observer from the frame's own realm, as it watches the frame's document
            new win.ResizeObserver(() => {
                height = Math.ceil(doc.documentElement.getBoundingClientRect().height);
            }).observe(doc.documentElement);

            win.addEventListener("beforeunload", () => {
                loading = true;
                // Downloads don't replace the page, so no load event would follow
                setTimeout(() => (loading = false), 10_000);
            });

            // Navigation inside the frame doesn't scroll the haweb page
            if (navigated && iframe.getBoundingClientRect().top < 0) {
                // iframe.scrollIntoView();
            }
            navigated = true;
        };

        iframe.addEventListener("load", onload);

        const themeObserver = new MutationObserver(() => {
            if (iframe.contentDocument) syncTheme(iframe.contentDocument);
        });
        themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        // The frame may have finished loading before hydration
        if (
            iframe.contentWindow?.location.href !== "about:blank" &&
            iframe.contentDocument?.readyState === "complete"
        ) {
            setTimeout(onload);
        }

        return () => {
            iframe.removeEventListener("load", onload);
            themeObserver.disconnect();
        };
    };
</script>

{#key navigationCount}
    <iframe
        {src}
        {title}
        class:loading
        style:height={height ? `${height}px` : undefined}
        {@attach frame}></iframe>
{/key}

<style>
    iframe {
        display: block;
        width: 100%;
        height: 80vh;
        border: 0;
        /* clear the fixed haweb header */
        scroll-margin-top: 80px;
        /* transition: opacity 0.2s; */
    }

    iframe.loading {
        /* opacity: 0.9; */
    }
</style>
