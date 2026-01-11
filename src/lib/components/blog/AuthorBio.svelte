<script lang="ts">
	import Loc from '$src/lib/components/Loc.svelte';
	import { localizeHref } from '$src/lib/paraglide/runtime';
	import AuthorMedaillon from '$src/lib/components/blog/AuthorMedaillon.svelte';
	import type { Author } from '$src/types';

	let { author, secondary=false }: { author: Author; secondary?: boolean } = $props();
</script>


<section class="author-header">
    <div class="author-medaillon">
        <AuthorMedaillon author={author} />
    </div>
    <div class="bio">
        <a href={localizeHref("/blog")} class="backlink">
            <Loc cs="Blog Herního archivu" en="Czechoslovak Game Archive Blog" />
        </a>
        {#if !secondary}
            <h2>
                <Loc
                    cs={`Blogové příspěvky od ${author.nameGenitive}`}
                    en={`Blog posts from ${author.name}`}
                />
            </h2>
        {:else}
            <h3>
                <a href={localizeHref(`/blog/authors/${author.slug}`)} class="backlink">
                    <Loc
                        cs={`Blogové příspěvky od ${author.nameGenitive}`}
                        en={`Blog posts from ${author.name}`}
                    />
                </a>
            </h3>
        {/if}
        <p>
            {#if author.bio}
                <Loc text={author.bio} />
            {/if}
        </p>
    </div>
</section>

<style>
    .backlink {
        text-decoration: none; 
    }
    h2, h3 {
        margin-top: 0.2em;
        margin-bottom: 0.4em;
    }

    .author-header {
        display: flex;
        gap: 24px;
        margin-bottom: 32px;
    }
    .author-medaillon {
        flex-shrink: 0;
    }


    @media (max-width: 600px) {
        .author-header {
            flex-direction: column;
            align-items: center;
        }
        .author-medaillon {
            margin-bottom: 16px;
        }
    }
</style>

