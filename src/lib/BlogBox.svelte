<script>
	import Arrow from '$lib/Arrow.svelte';
    export let href = undefined;
</script>

<div class="blog-box">
    <div class="cross">
        X
    </div>
    <div>
        <slot />
        {#if href}
            <Arrow {href} />
        {/if}
    </div>
</div>