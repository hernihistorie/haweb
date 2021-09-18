<script>
    export let href;
</script>

<a class="arrow" href="{href}">
    <img src="/static/arrow.png" alt="→">
</a>

<style>
    .arrow {
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        white-space: nowrap;
        text-align: center;
        text-decoration: none;
        font-size: 24px;
        color: var(--color-primary);
        border: 2px solid var(--color-primary);
        user-select: none;
    }
</style>