<!--
    The Bulánci web player (hernihistorie/bulanci, player/), deployed as static files at
    /play/bulanci/ next to the website, in an <iframe>. Adapted from the player's
    embed/BulanciPlayer.svelte: in TypeScript, without its own rounded frame (it goes inside a
    MapMonitor), and with focus().

    In development, vite.config.ts proxies /play/bulanci/ to the player's `npm run serve`.
-->
<script lang="ts">
    import { onMount } from "svelte";

    type PlayerMessage = { source: "bulanci-player"; type: string; [key: string]: unknown };

    interface Props {
        /** URL of the deployed player directory (its index.html) */
        src?: string;
        /** .eap URLs installed next to the game before it starts; the first is preselected */
        maps?: string[];
        /** Start downloading right away instead of waiting for "Hrát" inside the frame */
        autostart?: boolean;
        /**
         * Let the game play sound right away if the page already had a click. Without it, the
         * sound starts with the first click or key press in the game itself.
         */
        allowAutoplay?: boolean;
        title?: string;
        /** Every message from the player ({type: 'ready'|'progress'|'shown'|'error'|'exit'|...}) */
        onmessage?: (message: PlayerMessage) => void;
        class?: string;
    }

    let {
        src = "/play/bulanci/",
        maps = [],
        autostart = false,
        allowAutoplay = true,
        title = "Bulánci",
        onmessage,
        class: className = "",
    }: Props = $props();

    let frame: HTMLIFrameElement | undefined = $state();
    let status = $state("idle");
    let mounted = $state(false);
    onMount(() => {
        mounted = true;
    });

    const frameSrc = $derived.by(() => {
        const url = new URL(src, "http://placeholder/");
        if (maps.length) url.searchParams.set("maps", maps.join(","));
        if (autostart) url.searchParams.set("autostart", "1");
        return src.startsWith("http") ? url.href : url.pathname + url.search;
    });

    function handleMessage(e: MessageEvent) {
        if (!frame || e.source !== frame.contentWindow) return;
        const data = e.data as PlayerMessage;
        if (!data || data.source !== "bulanci-player") return;
        if (data.type === "shown") status = "running";
        else if (data.type === "started") status = "loading";
        else if (data.type === "error") status = "error";
        else if (data.type === "exit") status = "exited";
        onmessage?.(data);
    }

    function send(message: object) {
        frame?.contentWindow?.postMessage(message, new URL(frameSrc, location.href).origin);
    }

    /** Start the player (same as clicking "Hrát"; audio may need one more click) */
    export function start() {
        send({ type: "start" });
    }

    /** Restart the game, keeping every map loaded so far (a few seconds, no re-download) */
    export function restart() {
        send({ type: "restart" });
    }

    /** Set the volume (0..1, 1 = the game's own level; default 0.5) and/or mute */
    export function setVolume(volume?: number, muted?: boolean) {
        send({ type: "setVolume", volume, muted });
    }

    /** Send the keyboard to the game */
    export function focus() {
        frame?.focus();
    }

    /** Put the player into fullscreen (must be called from a user gesture) */
    export function fullscreen() {
        frame?.requestFullscreen?.();
        frame?.focus();
    }
</script>

<svelte:window onmessage={handleMessage} />

<div class="bulanci-player {className}" data-status={status}>
    <!--
        Only in the browser: prerendering would follow the link to the player, which isn't part of
        the website, and the player's first messages would arrive before the page listens
    -->
    {#if mounted}
        <iframe
            bind:this={frame}
            src={frameSrc}
            {title}
            allow={allowAutoplay
                ? "fullscreen; autoplay; keyboard-map"
                : "fullscreen; keyboard-map"}
            allowfullscreen></iframe>
    {/if}
</div>

<style>
    .bulanci-player {
        position: relative;
        width: 100%;
        aspect-ratio: 4 / 3;
        overflow: hidden;
        background: #0b0b0c;
    }

    iframe {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
</style>
