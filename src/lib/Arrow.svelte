<script>
    export let href;
</script>

<a class="arrow" href="{href}">
    <img src="/ico/ico_arrow.svg" alt="→"> <slot />
</a>

<style>
    .arrow {
        display: inline-block;
        text-decoration: none;
        font-size: 24px;
        user-select: none;
        display: flex;
        gap: 8px;
    }

    .arrow img {
        width: 30px;
        height: 30px;
    }
</style>