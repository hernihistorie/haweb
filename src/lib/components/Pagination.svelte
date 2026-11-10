<script lang="ts">
    import { loc } from "$src/lib/loc";

    interface Props {
        /** Current page, 1-based */
        page: number;
        pageCount: number;
        /** Element to scroll to after changing the page */
        scrollTarget?: string;
    }

    let { page = $bindable(), pageCount, scrollTarget }: Props = $props();

    /** Page numbers to show, `null` stands for an ellipsis */
    function getVisiblePages(currentPage: number, totalPages: number): (number | null)[] {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const pages: (number | null)[] = [1, 2];

        if (currentPage > 4) {
            pages.push(null);
        }

        const start = Math.max(3, currentPage - 1);
        const end = Math.min(totalPages - 2, currentPage + 1);
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (currentPage < totalPages - 3) {
            pages.push(null);
        }

        pages.push(totalPages - 1, totalPages);

        return pages;
    }

    function goToPage(pageNum: number) {
        page = pageNum;
        if (scrollTarget) {
            document.querySelector(scrollTarget)?.scrollIntoView({ block: "start", behavior: "instant" });
        }
    }
</script>

{#if pageCount > 1}
    <nav class="pagination" aria-label={loc({ cs: "Stránkování", en: "Pagination" })}>
        {#each getVisiblePages(page, pageCount) as pageNum, i (pageNum ?? `dots${i}`)}
            {#if pageNum === null}
                <span class="dots">…</span>
            {:else}
                <button
                    class:active={page === pageNum}
                    aria-current={page === pageNum ? "page" : undefined}
                    onclick={() => goToPage(pageNum)}>
                    {pageNum}
                </button>
            {/if}
        {/each}
    </nav>
{/if}

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
