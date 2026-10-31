<script lang="ts">
    import Loc from "../Loc.svelte";
    import ChevronLeftIcon from "@lucide/svelte/icons/chevron-left";
    import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
    import MaximizeIcon from "@lucide/svelte/icons/maximize";
    import MinimizeIcon from "@lucide/svelte/icons/minimize";
    import DownloadIcon from "@lucide/svelte/icons/download";
    import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
    import type { PDFDocumentLoadingTask, PDFDocumentProxy } from "pdfjs-dist";

    let { url }: { url: string } = $props();

    let viewer = $state<HTMLElement>();
    let canvas = $state<HTMLCanvasElement>();
    let doc = $state.raw<PDFDocumentProxy>();
    let failed = $state(false);
    let pageNumber = $state(1);
    /** Width / height of the first page, to size the stage before rendering */
    let aspectRatio = $state(4 / 3);
    let stageWidth = $state(0);
    let stageHeight = $state(0);
    let fullscreen = $state(false);

    // pdf.js only runs in the browser, so it's loaded on mount rather than imported
    $effect(() => {
        let destroyed = false;
        let loadingTask: PDFDocumentLoadingTask | undefined;

        (async () => {
            const pdfjs = await import("pdfjs-dist");
            if (destroyed) return;
            pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
            loadingTask = pdfjs.getDocument({ url });
            const loaded = await loadingTask.promise;
            const firstPage = (await loaded.getPage(1)).getViewport({ scale: 1 });
            if (destroyed) return;
            aspectRatio = firstPage.width / firstPage.height;
            doc = loaded;
        })().catch((e) => {
            if (destroyed) return;
            // Most likely an external PDF served without CORS headers
            console.error("Failed to load slides", e);
            failed = true;
        });

        return () => {
            destroyed = true;
            doc = undefined;
            loadingTask?.destroy();
        };
    });

    // Render each page into a fresh canvas and copy it over when done,
    // so that flipping through slides doesn't flash an empty canvas
    $effect(() => {
        if (!doc || !canvas || !stageWidth || !stageHeight) return;
        const target = canvas;
        const width = stageWidth;
        const height = stageHeight;
        let cancelled = false;
        let cancel: (() => void) | undefined;

        doc.getPage(pageNumber).then(async (page) => {
            if (cancelled) return;
            const base = page.getViewport({ scale: 1 });
            const scale = Math.min(width / base.width, height / base.height);
            const viewport = page.getViewport({ scale: scale * window.devicePixelRatio });
            const offscreen = document.createElement("canvas");
            offscreen.width = Math.floor(viewport.width);
            offscreen.height = Math.floor(viewport.height);
            const task = page.render({ canvas: offscreen, viewport });
            cancel = () => task.cancel();
            try {
                await task.promise;
            } catch {
                return; // cancelled by a newer render
            }
            target.width = offscreen.width;
            target.height = offscreen.height;
            target.style.width = `${Math.floor(base.width * scale)}px`;
            target.style.height = `${Math.floor(base.height * scale)}px`;
            target.getContext("2d")?.drawImage(offscreen, 0, 0);
        });

        return () => {
            cancelled = true;
            cancel?.();
        };
    });

    function goTo(n: number) {
        if (!doc) return;
        pageNumber = Math.min(Math.max(n, 1), doc.numPages);
    }

    function onkeydown(e: KeyboardEvent) {
        if (e.altKey || e.ctrlKey || e.metaKey) return;
        if (e.target instanceof HTMLElement && e.target.closest("input, textarea, select")) return;
        const actions: Record<string, () => void> = {
            ArrowLeft: () => goTo(pageNumber - 1),
            ArrowRight: () => goTo(pageNumber + 1),
            PageUp: () => goTo(pageNumber - 1),
            PageDown: () => goTo(pageNumber + 1),
            Home: () => goTo(1),
            End: () => goTo(doc?.numPages ?? 1),
            f: toggleFullscreen,
        };
        if (e.key in actions) {
            e.preventDefault();
            actions[e.key]();
        }
    }

    function toggleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            viewer?.requestFullscreen();
        }
    }
</script>

<svelte:window {onkeydown} />
<svelte:document onfullscreenchange={() => (fullscreen = !!document.fullscreenElement)} />

<div class="viewer" bind:this={viewer}>
    <div
        class="stage"
        style:aspect-ratio={aspectRatio}
        bind:clientWidth={stageWidth}
        bind:clientHeight={stageHeight}>
        {#if failed}
            <p class="message">
                <Loc cs="Slajdy se nepodařilo načíst." en="The slides could not be loaded." />
                <a href={url}><Loc cs="Otevřít PDF" en="Open the PDF" /></a>
            </p>
        {:else if !doc}
            <p class="message"><Loc cs="Načítám slajdy…" en="Loading slides…" /></p>
        {/if}
        <canvas bind:this={canvas} class:hidden={!doc}></canvas>
    </div>
    <div class="controls">
        <button
            class="link control"
            onclick={() => goTo(pageNumber - 1)}
            disabled={!doc || pageNumber <= 1}
            title="←">
            <ChevronLeftIcon />
            <Loc cs="Předchozí" en="Previous" />
        </button>
        <span class="counter">
            {#if doc}{pageNumber} / {doc.numPages}{/if}
        </span>
        <button
            class="link control"
            onclick={() => goTo(pageNumber + 1)}
            disabled={!doc || pageNumber >= doc.numPages}
            title="→">
            <Loc cs="Další" en="Next" />
            <ChevronRightIcon />
        </button>
        <span class="spacer"></span>
        <button class="link control" onclick={toggleFullscreen} title="F">
            {#if fullscreen}
                <MinimizeIcon />
                <Loc cs="Ukončit celou obrazovku" en="Exit full screen" />
            {:else}
                <MaximizeIcon />
                <Loc cs="Celá obrazovka" en="Full screen" />
            {/if}
        </button>
        <a class="control" href={url} download>
            <DownloadIcon />
            <Loc cs="Stáhnout" en="Download" />
        </a>
    </div>
</div>

<style>
    .viewer {
        display: flex;
        flex-direction: column;
        background: var(--color-bg);
    }

    .stage {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        /* Fit the slide and the controls below the site header */
        max-height: max(240px, calc(100svh - 340px));
        border: 2px solid var(--color-secondary);
        background: var(--color-surface);
        overflow: hidden;
    }

    .viewer:fullscreen .stage {
        flex: 1;
        min-height: 0;
        max-height: none;
        aspect-ratio: auto !important;
        border: none;
        background: #000;
    }

    canvas {
        display: block;
    }

    canvas.hidden {
        display: none;
    }

    .message {
        margin: 0;
        padding: 1em;
        text-align: center;
        color: var(--color-text-muted);
    }

    .controls {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px 20px;
        padding: 8px 0;
    }

    .viewer:fullscreen .controls {
        padding: 8px 16px;
    }

    .control {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--color-primary);
        text-decoration: none;
    }

    .control:disabled {
        color: var(--color-text-muted);
        cursor: default;
        text-decoration: none;
    }

    .control :global(.lucide-icon) {
        margin-bottom: 0;
    }

    .counter {
        min-width: 4em;
        text-align: center;
        font-variant-numeric: tabular-nums;
    }

    .spacer {
        flex: 1;
    }
</style>
