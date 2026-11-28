<!-- Only shown on touch screens without a mouse, where there's likely no keyboard either -->
<script lang="ts">
    import Loc from "#lib/components/Loc.svelte";
    import IconKeyboard from "@lucide/svelte/icons/keyboard";
</script>

<p class="keyboard-note">
    <IconKeyboard size="1.1em" />
    <Loc cs="Hra se ovládá jen klávesnicí." en="The game is played with a keyboard only." />
</p>

<style>
    .keyboard-note {
        display: none;
        align-items: center;
        gap: 0.4em;
        margin: 0 0 0.75em;
        color: var(--color-text-muted);
        font-size: 0.85em;
    }

    .keyboard-note :global(.lucide-icon) {
        margin: 0;
    }

    @media (pointer: coarse) and (not (any-pointer: fine)) {
        .keyboard-note {
            display: flex;
        }
    }
</style>
