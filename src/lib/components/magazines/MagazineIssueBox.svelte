<script lang="ts">
	import { localizedMonthName } from "$src/lib/loc";
	import type { MagazineIssue } from "$src/lib/magdb";
	import Box from "../Box.svelte";
	import Loc from "../Loc.svelte";
	import MagazineIssueVersionBox from "./MagazineIssueVersionBox.svelte";

    const { issue }: {issue: MagazineIssue} = $props();
</script>

<Box>
    <div class="issue" id={"issue-" + issue.id}>
        <div class="name-date">
            <h4>
                {issue.current_magazine_name}
                {#if issue.issue_number}
                    #{issue.issue_number}
                {/if}
                {#if issue.issue_title}
                    - {issue.issue_title}
                {/if}
            </h4>
            <date>
                <!-- TODO use LocalizedDate component -->
                {#if issue.published_day && issue.published_month && issue.published_year}
                    {issue.published_day}.
                    {issue.published_month}.
                    {issue.published_year}
                {:else if issue.published_month && issue.published_year}
                    {localizedMonthName(issue.published_month)}
                    {issue.published_year}
                {:else if issue.published_year}
                    {issue.published_year}
                {:else}
                    <small class="text-secondary"><Loc cs="datum vydání neznámé" en="publication date unknown" /></small>
                {/if}
                {#if issue.versions.length > 1}
                    <div>
                        <Loc cs={`${issue.versions.length} verze`} en={`${issue.versions.length} versions`} />
                    </div>
                {/if}
            </date>
        </div>
        <div class="versions">
            {#if issue.versions && issue.versions.length > 0}
                <ul class="unstyled">
                    {#each issue.versions as version}
                        <li>
                            <MagazineIssueVersionBox {version} sole={issue.versions.length === 1} />
                        </li>
                    {/each}
                </ul>
            {/if}
        </div>
    </div>
</Box>

<style>
    h4 {
        margin-bottom: 0.1em;
    }

    .issue {
        display: grid;
        grid-template-columns: 2fr 6fr;
        gap: 1em;
    }
</style>