<script lang="ts">
    import type { LocalizedString } from '$src/types';
    import type { Snippet } from 'svelte';
    import { getLocale } from '$lib/paraglide/runtime.js';

    interface Props {
        cs?: string | Snippet;
        en?: string | Snippet;
        text?: LocalizedString;
    }

    let { cs, en, text }: Props = $props();

    function getLocalizedContent(): string | Snippet | undefined {
        if (text !== undefined) {
            if (typeof text === 'string') return text;
            // Try requested language first, then fall back to any available language
            return text[getLocale()] ?? text['cs'] ?? text['en'] ?? '';
        }
        return getLocale() === 'cs' ? cs : en;
    }

    let content = $derived(getLocalizedContent());
</script>

{#if typeof content === 'string'}
    {@html content}
{:else if content}
    {@render content()}
{/if}