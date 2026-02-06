<script lang="ts">
	import type { IssueStatus } from "$src/lib/magdb";
	import IconCheck from "@lucide/svelte/icons/check";
	import IconSquareDashed from "@lucide/svelte/icons/square-dashed";
	import IconCircleAlert from "@lucide/svelte/icons/circle-alert";
	import IconFileQuestion from "@lucide/svelte/icons/file-question";
	import Loc from "../Loc.svelte";

    const { status }: {status: IssueStatus} = $props();
</script>

<span class="status status-{status.toLowerCase()}">
    {#if status === 'have'}
        <IconCheck />
    {:else if status === 'dont_have'}
        <IconSquareDashed />
    {:else if status === 'problems'}
        <IconCircleAlert />
    {:else if status === 'existence_unconfirmed'}
        <IconFileQuestion />
    {/if}

    <span class="status-text">
        {#if status === 'have'}
            <Loc cs="máme" en="we have" />
        {:else if status === 'dont_have'}
            <Loc cs="nemáme" en="we're missing" />
        {:else if status === 'problems'}
            <Loc cs="máme s vadou" en="we have with defects" />
        {:else if status === 'existence_unconfirmed'}
            <Loc cs="existence nepotvrzena" en="existence unconfirmed" />
        {/if}
    </span>
</span>

<style>
    span {
        display: inline-flex;
        align-items: center;
        gap: 0.45em;
        font-size: 0.9em;
        white-space: nowrap;
    }

    .status-have {
        color: var(--color-success);
    }
    .status-dont_have {
        color: var(--color-error);
    }
    .status-problems {
        color: var(--color-warning);
    }
    .status-existence_unconfirmed {
        color: var(--color-secondary);
    }
</style>