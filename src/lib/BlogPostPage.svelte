<script lang="ts">
	import Post from "./Post.svelte";
    import Loc from "./Loc.svelte";
    import type { BlogPost } from "$src/types";
	import type { Snippet } from "svelte";

    interface Props {
        post: BlogPost;
        children?: Snippet;
    }

    let {
        post,
        children
    }: Props = $props();
</script>

<Post title={post.title}>
    {#snippet side()}
        <div >
            <!--
                <img src="" alt="Profilový obrázek" />
            -->
            <author>
                {post.author_name ?? ''}
            </author>
            <date>
                {post.date_text ?? ''}
            </date>
        </div>
    {/snippet}
    {#snippet content()}
        <div>
            <a href="/blog" class="backlink">
                <Loc cs="Blog Herního archivu" en="Czechoslovak Game Archive Blog" />
            </a>
            <h2>
                <Loc text={post.title} />
            </h2>
            {@render children?.()}
        </div>
    {/snippet}
</Post>

<style>
    .backlink {
        text-decoration: none; 
    }
    h2 {
        margin-top: 0.2em;
    }
</style>