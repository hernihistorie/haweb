<script lang="ts">
    import type { LocalizedString } from '$src/types';
	import { getLocale } from './paraglide/runtime.js';

    interface Props {
        cs?: string;
        en?: string;
        text?: LocalizedString;
    }

    let { cs, en, text }: Props = $props();

    function getLocalizedText(): string {
        if (text !== undefined) {
            if (typeof text === 'string') return text;
            // Try requested language first, then fall back to any available language
            return text[getLocale()] ?? text['cs'] ?? text['en'] ?? '';
        }
        return getLocale() === 'cs' ? (cs ?? '') : (en ?? '');
    }
</script>

{@html getLocalizedText()}