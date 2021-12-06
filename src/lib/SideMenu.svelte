<script>
    export let open;
    export let duration;
    export let width;
    export let padding;
    export let paddingTop;
</script>

<style>
    #container {
        position: fixed;
        height: 100vh;
        top: 0px;
        overflow-y: auto;
        background-color: var(--color-secondary);
        z-index: 10;
    }
    
    #menu {
        text-align: left;
    }
</style>

<div id="container" style="width: {width}; right: {open ? '0px' : ('-' + width)}; transition: right {duration}s ease-in-out">
    <div id="menu" style="padding: {padding}; padding-top: {paddingTop};">
        <slot></slot>
    </div>
</div>