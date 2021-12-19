<script>
	import Arrow from '$lib/Arrow.svelte';
    export let href = undefined;
    export let title;
</script>

<div class="blog-box">
    <!-- TODO this should probably be h3 -->
    <h3>
        <a href="{href}">
            {title}
        </a>
    </h3>
    <p>
        <slot />
    </p>
    <Arrow {href} />
</div>

<style>
    .blog-box {
        width: 33%;
    }

    a {
        color: var(--color-black);
        text-decoration-color: var(--color-secondary);
        text-decoration-thickness: 3px;
        text-transform: uppercase;
    }


	@media screen and (max-width: 1200px) {
		.blog-box {
			width: 100%;
		}
	}
</style>