<script lang="ts">
	import Capsule from "$lib/components/Capsule.svelte";
	import type { InterviewStatus } from "$src/types";
	import Loc from "../Loc.svelte";

    interface Props {
        status: InterviewStatus;
    }

    let { status }: Props = $props();
</script>

{#if status === "published"}
    <!-- published -->
{:else}
    <div>
        <Capsule>
            {#if status === "in-progress"}
                <Loc cs="připravujeme" en="in progress" />
            {:else if status === "being-transcribed"}
                <Loc cs="přepisujeme" en="being transcribed" />
            {:else if status === "request-only"}
                <Loc cs="na vyžádání" en="on request" />
            {:else if status === "unavailable-for-duration"}
                <Loc cs="zatím nedostupný" en="presently unavailable" />
            {/if}
        </Capsule>
    </div>
{/if}