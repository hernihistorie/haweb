<script lang="ts">
	import { lang } from '../stores.js';
    import type { LocalizedString } from '$src/types';

    interface Props {
        cs?: string;
        en?: string;
        text?: LocalizedString;
    }

    let { cs, en, text }: Props = $props();

    let langValue: "en" | "cs" = $state("cs");
    lang.subscribe(value => {
        langValue = value as "en" | "cs";
    });

    function getLocalizedText(): string {
        if (text !== undefined) {
            if (typeof text === 'string') return text;
            // Try requested language first, then fall back to any available language
            return text[langValue] ?? text['cs'] ?? text['en'] ?? '';
        }
        return langValue === 'cs' ? (cs ?? '') : (en ?? '');
    }
</script>

{@html getLocalizedText()}