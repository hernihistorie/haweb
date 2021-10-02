<script>
	import Arrow from '$lib/Arrow.svelte';
    export let href = undefined;
    export let left = undefined;
    export let right = undefined;

    var box_class = "";
    if (left) box_class = "left";
    if (right) box_class = "right";
</script>

<div class="box {box_class}">
    <div class="cross">
        <img src="/ico/ico_x.svg" alt="x">
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

    .box .cross img {
        width: 15px;
    }

    .box :global(h2) {
        margin-top: 0;
    }

    .box :global(.year)::after {
        margin-left: 18px;
        margin-right: 13px;
        content: "";
        display: inline-block;
        width: 1px;
        height: 16px;
        background: #000;
    }

    .left, .right {
        width: calc(50% - 1px);
        margin-bottom: -38px;
    }

    .left {
        text-align: right;
        flex-direction: row-reverse;
        border-right: 2px solid var(--color-secondary);
    }

    .left .cross {
        margin-right: -8px;
    }

    .right {
        margin-left: auto;
        border-left: 2px solid var(--color-secondary);
    }

    .right .cross {
        margin-left: -8px;
    }
</style>