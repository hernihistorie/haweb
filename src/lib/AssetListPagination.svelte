<script lang="ts">
    import { PAGE_SIZE } from '$src/lib/rhinventory_api';

    let {
        assetPage = $bindable<number>(),
        assetCount = $bindable<number | null>()
    } = $props();

    function getVisiblePages(currentPage: number, totalPages: number) {
        const pages: (number | null)[] = [];
        
        if (totalPages <= 7) {
            return Array.from({length: totalPages}, (_, i) => i + 1);
        }

        // Always add first two pages
        pages.push(1, 2);

        // Add dots after 2 if current page is far from start
        if (currentPage > 4) {
            pages.push(null);
        }

        // Add pages around current page
        const start = Math.max(3, currentPage - 1);
        const end = Math.min(totalPages - 2, currentPage + 1);
        
        for (let i = start; i <= end; i++) {
            if (!pages.includes(i)) {
                pages.push(i);
            }
        }

        // Add dots before last two pages if current page is far from end
        if (currentPage < totalPages - 3) {
            pages.push(null);
        }

        // Always add last two pages
        pages.push(totalPages - 1, totalPages);

        return pages;
    }
</script>

<div class="pagination">
    {#if assetCount && assetCount > PAGE_SIZE}
        {#each getVisiblePages(assetPage, Math.ceil(assetCount / PAGE_SIZE)) as pageNum}
            {#if pageNum === null}
                <span class="dots">...</span>
            {:else}
                <button
                    class:active={assetPage === pageNum}
                    onclick={() => {
                        assetPage = pageNum;
                        document.querySelector('#assetList')?.scrollIntoView({block: 'start', behavior: 'instant'});
                    }}
                >
                    {pageNum}
                </button>
            {/if}
        {/each}
    {/if}
</div>

<style>
    .dots {
        display: inline-block;
        padding: 0 0.5em;
        user-select: none;
    }
    .pagination {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
    }

    button {
        height: auto;
    }
</style>