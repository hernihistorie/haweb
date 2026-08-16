<script lang="ts">
	import { localizeHref } from "$src/lib/paraglide/runtime";
	import Loc from "$lib/components/Loc.svelte";
	import { pathnameMatches, pathnameStartswith } from "$src/lib/util";
	import PipeList from "$src/lib/components/PipeList.svelte";

</script>

{#snippet link(data: {url: string, match?: boolean, cs: string, en: string})}
    <li>
        <a href={localizeHref(data.url)} class:active={data.match ? pathnameMatches(data.url) : pathnameStartswith(data.url)}>
            <Loc
                cs={data.cs}
                en={data.en}
            />
        </a>
    </li>
{/snippet}

<ha-bulanci-menu>
    <PipeList>
        {@render link({url: "/projects/bulanci/", match: true, cs: "Bulánci", en: "Combat pillows"})}
        {@render link({url: "/projects/bulanci/maps", cs: "Mapy", en: "Maps"})}
        {@render link({url: "/projects/bulanci/fans", cs: "Fanoušci", en: "Fans"})}
        {@render link({url: "/projects/bulanci/webs", cs: "Weby", en: "Webs"})}
    </PipeList>
</ha-bulanci-menu>

<style>
    ha-bulanci-menu {
        display: block;
        margin-bottom: 1em;
    }
</style>