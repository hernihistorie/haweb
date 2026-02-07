<script lang="ts">
	import Arrow from '$src/lib/components/Arrow.svelte';
    interface Props {
        href?: string | undefined;
        left?: boolean | undefined;
        right?: boolean | undefined;
        children?: import('svelte').Snippet;
        decoration?: boolean | 'hidden' | undefined;
        class?: string | undefined;
    }

    let {
        href = undefined,
        left = undefined,
        right = undefined,
        children,
        decoration = true,
        class: _class = undefined
    }: Props = $props();

    var box_class = $derived(left ? 'left' : right ? 'right' : '');
</script>

<div class="box {box_class} {_class}">
    {#if decoration}
        <div class="cross" class:hidden={decoration === 'hidden'}>
            <img src="/ico/ico_x.svg" alt="">
        </div>
    {/if}
    <div class="content">
        {@render children?.()}
        <!-- TODO align arrow to bottom of box if box is taller-->
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

    .box.no-margin{
        margin-top: 0px;
        margin-bottom: 0px;
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

    .cross.hidden {
        visibility: hidden;
    }

    .box :global(h3) {
        margin-top: 0;
    }

    .box :global(h4) {
        margin-top: 0.35em;
    }

    .box :global(h5) {
        margin-top: 0.5em;
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

    .content {
        width: 100%;
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