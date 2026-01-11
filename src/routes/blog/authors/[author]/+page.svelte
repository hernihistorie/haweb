<script lang="ts">
  import AuthorBio from '../../../../lib/components/blog/AuthorBio.svelte';

	import Meta from '$src/lib/components/layout/Meta.svelte';
	import BlogBoxes from '../../BlogBoxes.svelte';
	import PageLang from "$src/lib/components/PageLang.svelte";
	import Loc from '$src/lib/components/Loc.svelte';
	import { localizeHref } from '$src/lib/paraglide/runtime';
	import AuthorMedaillon from '$src/lib/components/blog/AuthorMedaillon.svelte';

	let { data } = $props();
</script>

<Meta title={`Blog - ${data.author.name}`} />

<AuthorBio author={data.author} />

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