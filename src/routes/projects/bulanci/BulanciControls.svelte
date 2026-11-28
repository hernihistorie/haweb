<!--
    The game's default keys. Up to three players share the keyboard, and which keys each gets
    depends on how many are playing (kDefaultKeySets and kDefaultKeys in the decompiled game,
    hernihistorie/bulanci, decomp/src/game/GameSettings.cpp).
-->
<script lang="ts">
    import Loc from "#lib/components/Loc.svelte";
    import type { LocalizedString } from "$src/types";
    import IconKeyboard from "@lucide/svelte/icons/keyboard";

    /** A key's label, translated where it's a word */
    type Key = string | LocalizedString;
    type KeySet = { players: LocalizedString; move: string[]; fire: Key; weapon: string };

    // Movement keys in the order up, left, down, right, as they sit on the keyboard
    const SINGLE_PLAYER: KeySet = {
        players: { cs: "Jeden hráč", en: "One player" },
        move: ["↑", "←", "↓", "→"],
        fire: { cs: "Mezerník", en: "Space" },
        weapon: "C",
    };

    /** Three players; with two, the second gets the third's keys */
    const MULTIPLAYER: KeySet[] = [
        {
            players: { cs: "1. hráč", en: "Player 1" },
            move: ["E", "S", "D", "F"],
            fire: "A",
            weapon: "Q",
        },
        {
            players: { cs: "2. hráč", en: "Player 2" },
            move: ["I", "J", "K", "L"],
            fire: "M",
            weapon: "N",
        },
        {
            players: { cs: "3. hráč", en: "Player 3" },
            move: ["Num 8", "4", "5", "6"],
            fire: "Num 0",
            weapon: "Num 1",
        },
    ];
</script>

{#snippet key(key: Key)}
    {#if typeof key === "string"}{key}{:else}<Loc text={key} />{/if}
{/snippet}

{#snippet row(keys: KeySet, sub = false)}
    <tr>
        <th scope="row" class:sub><Loc text={keys.players} /></th>
        <!-- The keys wrap onto two lines where there's no room -->
        <td>
            {#each keys.move as move (move)}<kbd>{move}</kbd>{/each}
        </td>
        <td><kbd>{@render key(keys.fire)}</kbd></td>
        <td><kbd>{@render key(keys.weapon)}</kbd></td>
    </tr>
{/snippet}

<section class="controls">
    <h3><IconKeyboard size="1em" /> <Loc cs="Ovládání" en="Controls" /></h3>
    <table>
        <thead>
            <tr>
                <th></th>
                <th><Loc cs="Pohyb" en="Move" /></th>
                <th><Loc cs="Střelba" en="Shoot" /></th>
                <th><Loc cs="Zbraň" en="Weapon" /></th>
            </tr>
        </thead>
        <tbody>
            {@render row(SINGLE_PLAYER)}
        </tbody>
        <tbody>
            <tr>
                <th scope="rowgroup" colspan="4"><Loc cs="Více hráčů" en="More players" /></th>
            </tr>
            {#each MULTIPLAYER as keys (keys.weapon)}
                {@render row(keys, true)}
            {/each}
        </tbody>
    </table>
    <p>
        <Loc
            cs="Hrají-li dva, 2. hráč má klávesy 3. hráče."
            en="With two players, player 2 has player 3's keys." />
    </p>
    <p>
        <kbd>Esc</kbd>
        <Loc cs="pozastaví hru." en="pauses the game." />
    </p>
</section>

<style>
    .controls {
        font-size: 0.85em;
    }

    h3 {
        display: flex;
        align-items: center;
        gap: 0.35em;
        margin: 0 0 0.4em;
        font-size: 1.15em;
    }

    h3 :global(.lucide-icon) {
        margin: 0;
        color: var(--color-text-muted);
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        padding: 0.3em 0.4em 0.3em 0;
        text-align: left;
        vertical-align: middle;
    }

    thead th {
        color: var(--color-text-muted);
        font-weight: normal;
    }

    tbody th {
        font-weight: normal;
    }

    tbody + tbody,
    tbody tr + tr:not(:nth-child(2)) {
        border-top: 1px solid var(--color-secondary-transparent);
    }

    /* "Více hráčů", over the players' rows, which are indented below it */
    th[scope="rowgroup"] {
        padding-top: 0.6em;
        color: var(--color-text-muted);
        font-weight: normal;
    }

    th.sub {
        padding-left: 0.8em;
    }

    kbd {
        display: inline-block;
        min-width: 1.5em;
        margin: 0.1em 0.15em 0.1em 0;
        padding: 0.1em 0.35em;
        border: 1px solid var(--color-secondary);
        border-bottom-width: 2px;
        border-radius: 4px;
        background: var(--color-surface);
        font-family: inherit;
        font-size: 0.95em;
        text-align: center;
        white-space: nowrap;
    }

    p {
        margin: 0.5em 0 0;
        color: var(--color-text-muted);
    }
</style>
