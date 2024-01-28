<script lang="ts">
	import Arrow from '$lib/Arrow.svelte';
    export let href: string | undefined = undefined;
    export let left: boolean | undefined = undefined;
    export let right: boolean | undefined = undefined;

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
        box-sizing: border-box;
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

    .box :global(h3) {
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
        margin-bottom: -38px;
    }

    .left {
        width: 50%;
        text-align: right;
        margin-right: auto;
        flex-direction: row-reverse;
    }

    .left .cross {
        margin-right: -8px;
    }

    .right {
        width: 50%;
        margin-left: auto;
    }

    .right .cross {
        margin-left: -8px;
    }

    @media only screen and (max-width: 700px) {
        .left, .right {
            width: 100%;
        }

        .left {
            margin-left: auto;
            text-align: left;
            flex-direction: row;
        }

        .right {
            margin-left: 0px;
        }

        .left .cross, .right .cross {
            margin-left: -2px;
            margin-right: 0px;
        }
    }
</style>