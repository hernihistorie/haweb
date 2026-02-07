<script lang="ts">
    import IconBuilding2 from "@lucide/svelte/icons/building-2";
    import IconBookOpenText from "@lucide/svelte/icons/book-open-text";
    import IconCalendar from "@lucide/svelte/icons/calendar";
    import IconNotebookText from "@lucide/svelte/icons/notebook-text";
    import IconBookCopy from "@lucide/svelte/icons/book-copy";
	import { czechPlural, englishPlural, localizedMonthName } from "$src/lib/loc";
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
            <div>
                <IconCalendar class="text-secondary" />
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
                </date>
            </div>
            {#if issue.issuer}
                <div>
                    <IconBuilding2 class="text-secondary" />
                        <Loc
                            cs={issue.issuer}
                            en={issue.issuer}
                        />
                </div>
            {/if}
            {#if issue.page_count}
                <div>
                    <IconBookOpenText class="text-secondary" />
                        <Loc
                            cs={`${issue.page_count} ${czechPlural(issue.page_count, "strana", "strany", "stran")}`}
                            en={`${issue.page_count} ${englishPlural(issue.page_count, "page", "pages")}`}
                        />
                </div>
            {/if}
            {#if issue.versions.length > 1}
                <div>
                    <IconBookCopy class="text-secondary" />
                    <Loc cs={`${issue.versions.length} verze`} en={`${issue.versions.length} versions`} />
                </div>
            {/if}
            {#if issue.note}
                <div>
                    <IconNotebookText class="text-secondary" />
                    <span class="text-secondary"><Loc cs="Poznámka" en="Note" />:</span><br>
                    {issue.note}
                </div>
            {/if}
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

    .name-date {
        display: flex;
        flex-direction: column;
        gap: 0.2em;

    }
    .name-date div {
        font-size: 0.9em;
    }
    .name-date :global(.lucide-icon) {
        margin-right: 0.2em;
    }

    .issue {
        display: grid;
        grid-template-columns: 3.75fr 10fr;
        gap: 0.1em;
    }
    
    @media (max-width: 800px) {
        .issue {
            grid-template-columns: 1fr;
        }
    }
</style>