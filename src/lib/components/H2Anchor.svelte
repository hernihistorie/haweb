<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
    import HeadingAnchor from "./HeadingAnchor.svelte";

    interface Props extends HTMLAttributes<HTMLHeadingElement> {
        text: string;
    }

    const { text, ...restProps }: Props = $props();
</script>

<HeadingAnchor tag="h2" {text} {...restProps} />
