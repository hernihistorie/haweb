<script lang="ts">
	import Box from "../Box.svelte";
	import MagazineBlock from "./MagazineBlock.svelte";
	import BulletPoint from "../BulletPoint.svelte";
	import MagazineIssueVersionNameSuffix from "./MagazineIssueVersionNameSuffix.svelte";
	import IssueStatus from "./IssueStatus.svelte";
	import type { MissListMagazine } from "$src/lib/magdb";
	import Loc from "../Loc.svelte";

    const { magazine }: {magazine: MissListMagazine} = $props();

    let showAllIssues = $derived(magazine.missing_issues.length <= 5);
</script>

<Box>
    <div class="miss-list-entry">
        <MagazineBlock {magazine} makeLinkProminent={false} />
        <ul class="styled">
            {#each showAllIssues ? magazine.missing_issues : magazine.missing_issues.slice(0, 5) as issue}
                <li class="miss-list-issue">
                    {issue.magazine_issue}
                    <span class="text-secondary">
                        <BulletPoint />
                    </span>
                    <span>
                        <MagazineIssueVersionNameSuffix nameSuffix={issue.name_suffix} />
                    </span>
                    <br>
                    <IssueStatus status={issue.status} />
                </li>
            {/each}
            {#if !showAllIssues}
                <button class="link show-more" onclick={() => showAllIssues = true}>
                    <Loc
                        cs={`Prohlédnout všech ${magazine.missing_issues.length} chybějících čísel`}
                        en={`View all ${magazine.missing_issues.length} missing issues`}
                    />
                </button>
            {/if}
        </ul>
    </div>
</Box>

<style>
    .miss-list-entry {
        display: grid;
        grid-template-columns: 1fr 4fr;
        margin-top: 0.5em;
    }
    .miss-list-issue {
        line-height: 1.4em;
    }

    .show-more {
        color: var(--color-primary);
    }
</style>