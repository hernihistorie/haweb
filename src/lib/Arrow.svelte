<script lang="ts">
    let {
        href,
        text = undefined
    } = $props();
</script>

<a class="arrow" href="{href}">
    <img src="/ico/ico_arrow.svg" alt="→">
    {#if text}
        {text}
    {/if}
</a>

<style>
    .arrow {
        display: inline-block;
        text-decoration: none;
        font-size: 24px;
        user-select: none;
    }

    .arrow img {
        width: 30px;
        height: 30px;
        padding-bottom: 4px;
        padding-right: 4px;
        vertical-align: middle;
    }

    .arrow {
    }
</style>