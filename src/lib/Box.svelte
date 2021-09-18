<script>
	import Arrow from '$lib/Arrow.svelte';
    export let href = undefined;
</script>

<div class="box">
    <div class="cross">
        <img src="/static/cross.png" alt="x">
    </div>
    <div>
        <slot />
        {#if href}
            <Arrow {href} />
        {/if}
    </div>
</div>

<style>
    .box {
        display: flex;
        margin-top: 38px;
        margin-bottom: 38px;
    }

    .box .cross {
        margin-top: 8px;
        width: 44px;
        flex-shrink: 0;
        user-select: none;
    }
    .box :global(h2) {
        margin-top: 0;
    }
</style>