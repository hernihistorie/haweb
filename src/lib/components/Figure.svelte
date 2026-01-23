<script lang="ts">
	import type { LocalizedString } from "$src/types";
	import { loc } from "../loc";

    interface Props {
        src: string;
        caption?: LocalizedString;
        alt?: LocalizedString;
        href?: string;
    }

    const props: Props = $props();
    const alt = props.alt ?? props.caption ?? "";

</script>


<figure>
    {#if props.href}
        <a href={props.href} target="_blank">
            <img src={props.src} alt={loc(alt)} />
        </a>
    {:else}
        <img src={props.src} alt={loc(alt)} />
    {/if}
    {#if props.caption}
        <figcaption>
            {#if props.href}
                <a href={props.href} target="_blank">{loc(props.caption)}</a>
            {:else}
                {loc(props.caption)}
            {/if}
        </figcaption>
    {/if}
</figure>