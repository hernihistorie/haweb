<!--
    Original code (c) 2021 Joris Barkema under ISC License
    
    https://github.com/jorisBarkema/svelte-burger-menu
-->
<script>
    export let open;
    export let duration;
</script>

<style>
    button {
        margin: 5px;
        position: absolute;
        right: 32px;
        top: 92px;
        z-index: 15;
        background-color: transparent;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        overflow: hidden;
        outline: none;
    }
	svg line {
		stroke: currentColor;
		stroke-width: 3;
    }

    button.open {
        position: fixed;
    }
    /* rotate the top line */
    .open #top {
        transform: translate(10px, 0px) rotate(45deg)
    }
    /* hide the middle */
    .open #mid {
        opacity: 0
    }
    /* rotate the bottom line */
    .open #bot {
        transform: translate(-15px, 8px) rotate(-45deg)
    }
</style>

<button class:open on:click={() => open = !open}
    style="transition: color {duration}s ease-in-out; color: {open ? 'var(--color-bg)' : 'var(--color-primary)'};">
	<svg width=32 height=32>
        <line id="top" x1=0 y1=9    x2=32 y2=9    style="transition: transform {duration}s ease-in-out, opacity {duration}s ease-in-out;"/>
		<line id="mid" x1=0 y1=18.5 x2=32 y2=18.5 style="transition: transform {duration}s ease-in-out, opacity {duration}s ease-in-out;"/>
		<line id="bot" x1=0 y1=28    x2=32 y2=28  style="transition: transform {duration}s ease-in-out, opacity {duration}s ease-in-out;"/>
	</svg>
</button>
