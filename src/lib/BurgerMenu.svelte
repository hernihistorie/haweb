<!--
    Original code (c) 2021 Joris Barkema under ISC License
    
    https://github.com/jorisBarkema/svelte-burger-menu
-->
<script>
    import BurgerButton from './BurgerButton.svelte'
    import SideMenu from './SideMenu.svelte'
    export let open = false;
    export let duration = 0.4;
    export let width = '300px';
    export let padding = '25px';
    export let paddingTop = '50px';
    export let backgroundColor = '--var(--color-secondary)';
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
    <slot></slot>
</SideMenu>