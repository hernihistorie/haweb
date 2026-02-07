<script lang="ts">
    import { navigating } from '$app/state';
</script>

<div class="navigating-indicator" class:visible={navigating.type}>
</div>

<style>
    .navigating-indicator {
        position: fixed;
        bottom: 2em;
        left: 2em;
        width: 1em;
        height: 1em;
        z-index: 9999;
        background-color: var(--color-primary);
        border-radius: 50%;
        box-shadow: 0 0 8px var(--color-primary);
        animation: led-flicker 0.1s infinite;
        display: none;
    }

    .navigating-indicator.visible {
        display: block;
    }

    @keyframes led-flicker {
        0% {
            opacity: 1;
            box-shadow: 0 0 8px var(--color-primary);
        }
        20% {
            opacity: 0.3;
            box-shadow: 0 0 2px var(--color-primary);
        }
        40% {
            opacity: 1;
            box-shadow: 0 0 10px var(--color-primary);
        }
        50% {
            opacity: 0.2;
            box-shadow: 0 0 1px var(--color-primary);
        }
        70% {
            opacity: 0.9;
            box-shadow: 0 0 6px var(--color-primary);
        }
        85% {
            opacity: 0.4;
            box-shadow: 0 0 3px var(--color-primary);
        }
        100% {
            opacity: 1;
            box-shadow: 0 0 8px var(--color-primary);
        }
    }
</style>