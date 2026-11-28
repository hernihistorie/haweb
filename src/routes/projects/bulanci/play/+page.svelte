<script lang="ts">
    import type { BulanciGalleryMap } from "$src/data/bulanci/maps.server";
    import Arrow from "#lib/components/Arrow.svelte";
    import Loc from "#lib/components/Loc.svelte";
    import Meta from "#lib/components/layout/Meta.svelte";
    import IconMaximize from "@lucide/svelte/icons/maximize";
    import IconShuffle from "@lucide/svelte/icons/shuffle";
    import IconX from "@lucide/svelte/icons/x";
    import { onMount, tick, untrack } from "svelte";
    import BulanciControls from "../BulanciControls.svelte";
    import BulanciMenu from "../BulanciMenu.svelte";
    import KeyboardNote from "../KeyboardNote.svelte";
    import BulanciPlayer from "../maps/BulanciPlayer.svelte";
    import MapGallery from "../maps/MapGallery.svelte";
    import MapMonitor from "../maps/MapMonitor.svelte";
    import { mapFileHref, mapHref, mapListHref, PLAY_GALLERY_SIZE } from "../maps/mapList";

    const { data } = $props();

    /** The fan map chosen from the galleries, if any */
    let chosen: BulanciGalleryMap | null = $state(null);
    let player: BulanciPlayer | undefined = $state();
    let game: HTMLElement | undefined = $state();

    // The page is prerendered, so the build's selection is shown until the browser picks its own
    // Raw, since it's only ever replaced whole and compared with the pool's maps
    let randomMaps = $state.raw(untrack(() => data.randomPool.slice(0, PLAY_GALLERY_SIZE)));

    function shuffle() {
        const others = data.randomPool.filter((map) => !randomMaps.includes(map));
        randomMaps = others
            .map((map) => ({ map, order: Math.random() }))
            .sort((a, b) => a.order - b.order)
            .slice(0, PLAY_GALLERY_SIZE)
            .map(({ map }) => map);
    }

    onMount(shuffle);

    /** Restarts the game with the map preselected in its level list */
    async function play(map: BulanciGalleryMap | null) {
        chosen = map;
        await tick();
        game?.scrollIntoView({ block: "start", behavior: "smooth" });
    }
</script>

<Meta title={{ cs: "Hrát – Bulánci", en: "Play – Bulánci" }} />

<BulanciMenu />

<article>
    <h2><Loc cs="Zahrajte si Bulánky" en="Play Bulánci" /></h2>
    <p class="intro">
        <Loc
            cs="Port původní hry do prohlížeče. Po klepnutí na hru se pustí zvuk."
            en="A port of the original game to the browser. The sound starts once you click the game." />
    </p>

    <div class="main">
        <div class="game" bind:this={game}>
            <MapMonitor size="large">
                <!-- Recreated for another map, which the game only finds when it starts -->
                {#key chosen?.id}
                    <BulanciPlayer
                        bind:this={player}
                        class="map-image"
                        maps={chosen ? [mapFileHref(chosen)] : []}
                        autostart
                        allowAutoplay={chosen !== null}
                        onmessage={(message) => {
                            if (message.type === "shown" && chosen) player?.focus();
                        }} />
                {/key}
            </MapMonitor>
            <div class="player-controls">
                {#if chosen}
                    <span class="chosen">
                        <Loc cs="Mapa" en="Map" />
                        <a href={mapHref(chosen)}>{chosen.name}</a>
                        <button class="link" onclick={() => play(null)}>
                            <IconX size="1em" />
                            <Loc cs="Hrát bez ní" en="Play without it" />
                        </button>
                    </span>
                {/if}
                <button class="link" onclick={() => player?.fullscreen()}>
                    <IconMaximize size="1em" />
                    <Loc cs="Celá obrazovka" en="Full screen" />
                </button>
            </div>
        </div>

        <aside>
            <KeyboardNote />
            <BulanciControls />
        </aside>
    </div>

    <section class="maps">
        <h3>
            <Loc cs="Vyberte si z" en="Choose from" />
            {data.mapCount}
            <Loc cs="fanouškovských map" en="fan-made maps to play" />
        </h3>

        <h4><Loc cs="Nejrozšířenější" en="The most widespread" /></h4>
        <MapGallery maps={data.topMaps} onplay={play} />

        <div class="random-heading">
            <h4><Loc cs="Náhodný výběr" en="A random selection" /></h4>
            <button class="link" onclick={shuffle}>
                <IconShuffle size="1em" />
                <Loc cs="Zamíchat" en="Shuffle" />
            </button>
        </div>
        <MapGallery maps={randomMaps} onplay={play} />

        <p class="show-all">
            <Arrow href={mapListHref({})}>
                <Loc cs="Zobrazit všech" en="Show all" />
                {data.mapCount}
                <Loc cs="map" en="maps" />
            </Arrow>
        </p>
    </section>
</article>

<style>
    .intro {
        max-width: 50em;
        color: var(--color-text-muted);
    }

    /* Like a map's page: the game where the screenshot is, the keys next to it */
    .main {
        display: grid;
        grid-template-columns: minmax(0, 800px) minmax(17em, 1fr);
        gap: 1.5em;
        align-items: start;
    }

    @media (max-width: 760px) {
        .main {
            grid-template-columns: minmax(0, 1fr);
        }
    }

    /* Below the game, like the archived website viewer's links below a website */
    .player-controls {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: center;
        gap: 0.25em 1.25em;
        padding: 0.4em 0 0;
        color: var(--color-text-muted);
        font-size: 0.85em;
    }

    .chosen {
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.4em;
        margin-right: auto;
    }

    .player-controls button {
        display: inline-flex;
        align-items: center;
        gap: 0.3em;
        color: var(--color-text-muted);
        cursor: pointer;
    }

    .player-controls button:hover,
    .player-controls button:focus-visible {
        color: var(--color-text);
    }

    .player-controls :global(.lucide-icon) {
        margin: 0;
    }

    .maps {
        margin-top: 2.5em;
    }

    h4 {
        margin: 1.5em 0 0.75em;
    }

    .random-heading {
        display: flex;
        align-items: baseline;
        gap: 1em;
    }

    .random-heading button {
        display: inline-flex;
        align-items: center;
        gap: 0.3em;
        color: var(--color-text-muted);
        font-size: 0.9em;
        cursor: pointer;
    }

    .random-heading button:hover,
    .random-heading button:focus-visible {
        color: var(--color-text);
    }

    .random-heading :global(.lucide-icon) {
        margin: 0;
    }

    .show-all {
        margin-top: 1.5em;
    }
</style>
