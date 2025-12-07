<script lang="ts">
	import Post from "./Post.svelte";
    import Loc from "./Loc.svelte";
    import type { BlogPost } from "$src/types";

    interface Props {
        post: BlogPost;
        children?: import('svelte').Snippet;
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
        <div >
            <h2><Loc text={post.title} /></h2>
            {@render children?.()}
        </div>
    {/snippet}
</Post>