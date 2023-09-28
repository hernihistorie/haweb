<script>
	import { pageTitle } from '../stores.js'
	import Meta from './Meta.svelte';
    export let author_name;
    export let date;
    export let title;
</script>

<Meta title={title}/>

<article>
    <div class="side">
        <!--
            <img src="" alt="Profilový obrázek" />
        -->
        <author>
            {author_name}
        </author>
        <date>
            {date}
        </date>
    </div>
    <div class="content">
        <h2>{title}</h2>
        <slot />
    </div>
</article>

<style>
    article {
        display: flex;
        margin-top:108px;
    }
    .side {
        margin-left: 100px;
        width: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .side img {
        margin-bottom: 8px;
    }

    .content {
        margin-left: 24px;
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

    img, author, date {
        display: block;
    }

	@media screen and (max-width: 1200px) {
		article {
            display: block;
        }

        .side {
            margin: 0;
            margin-bottom: 32px;
            text-align: center;
            width: 100%;
        }
	}
</style>