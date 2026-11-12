<script lang="ts">
    import Loc from "#lib/components/Loc.svelte";
    import { authorHref } from "./authorList";

    /** For the interview's details: a link to the narrator's maps and websites */
    let { name }: { name: string } = $props();
</script>

<dt><Loc cs="Mapy a weby do Bulánků" en="Bulánci maps and websites" /></dt>
<dd><a href={authorHref(name)}>{name}</a></dd>
