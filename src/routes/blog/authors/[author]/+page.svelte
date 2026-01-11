<script lang="ts">
	import Meta from '$src/lib/components/layout/Meta.svelte';
	import BlogBoxes from '../../BlogBoxes.svelte';
	import PageLang from "$src/lib/components/PageLang.svelte";
	import Loc from '$src/lib/components/Loc.svelte';
	import { localizeHref } from '$src/lib/paraglide/runtime';
	import AuthorMedaillon from '$src/lib/components/blog/AuthorMedaillon.svelte';

	let { data } = $props();
</script>

<Meta title={`Blog - ${data.author.name}`} />

<section class="author-header">
    <div class="author-medaillon">
        <AuthorMedaillon author={data.author} />
    </div>
    <div class="bio">
        <a href={localizeHref("/blog")} class="backlink">
            <Loc cs="Blog Herního archivu" en="Czechoslovak Game Archive Blog" />
        </a>
        <h2>
            <Loc
                cs={`Blogové příspěvky od ${data.author.nameGenitive}`}
                en={`Blog posts from ${data.author.name}`}
            />
        </h2>
        <p>
            {#if data.author.bio}
                <Loc text={data.author.bio} />
            {/if}
        </p>
    </div>
</section>

<BlogBoxes posts={data.authorBlogPosts} />

<style>
    .backlink {
        text-decoration: none; 
    }
    h2 {
        margin-top: 0.2em;
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