<script lang="ts">
	import Meta from './Meta.svelte';
    export let title: string;
</script>

<Meta title={title}/>

<article>
    <div class="side">
        <slot name="side" />
    </div>
    <div class="content">
        <slot name="content" />
    </div>
</article>

<style>
    article {
        margin: auto;
        display: flex;
        justify-content: center;
        margin-top: 108px;
    }
    .side {
        margin-left: 100px;
        max-width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .side :global(img) {
        margin-bottom: 8px;
    }

    .content {
        margin-left: 24px;
        max-width: 700px;
    }
    
    .content > :global(h2) {
        margin-top: 0;
        text-transform: uppercase;
    }
    
    .content > :global(p:first-of-type) {
        font-size: 120%;
    }
    
    .content :global(img) {
        max-width: 100%;
    }

    .side :global(img), .side :global(author), .side :global(date) {
        display: block;
    }

	@media screen and (max-width: 1200px) {
		article {
            display: block;
        }

        .side {
            position: auto;
            margin: auto;
            margin-bottom: 32px;
            text-align: center;
            width: 100%;
        }
	}

    @media only screen and (max-width: 800px) {
        .content {
            margin-left: 0;
        }
    }
</style>