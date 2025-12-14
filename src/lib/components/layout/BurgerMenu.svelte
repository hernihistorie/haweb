<!--
    Original code (c) 2021 Joris Barkema under ISC License
    
    https://github.com/jorisBarkema/svelte-burger-menu
-->
<script lang="ts">
    import BurgerButton from './BurgerButton.svelte'
    import SideMenu from './SideMenu.svelte'
    interface Props {
        open?: boolean;
        duration?: number;
        width?: string;
        padding?: string;
        paddingTop?: string;
        backgroundColor?: string;
        children?: import('svelte').Snippet;
    }

    let {
        open = $bindable(false),
        duration = 0.4,
        width = '300px',
        padding = '25px',
        paddingTop = '50px',
        backgroundColor = '--var(--color-secondary)',
        children
    }: Props = $props();
    let burgerProps = {
        duration: duration
    }
    let menuProps = {
        duration: duration,
        width: width,
        padding: padding,
        paddingTop: paddingTop,
        backgroundColor: backgroundColor
    }
</script>

<BurgerButton {...burgerProps} bind:open={open}/>

<SideMenu {...menuProps} bind:open={open}>
    {@render children?.()}
</SideMenu>