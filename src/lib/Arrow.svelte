<script>
    export let href;
</script>

<a class="arrow" href="{href}">
    <img src="/static/ico/ico_arrow.svg" alt="→">
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
    }
</style>