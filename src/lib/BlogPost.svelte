<script lang="ts">
	import Post from "./Post.svelte";

    interface Props {
        author_name: string;
        date: string;
        title: string;
        children?: import('svelte').Snippet;
    }

    let {
        author_name,
        date,
        title,
        children
    }: Props = $props();
</script>

<Post title={title}>
    {#snippet side()}
        <div >
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
    {/snippet}
    {#snippet content()}
        <div >
            <h2>{title}</h2>
            {@render children?.()}
        </div>
    {/snippet}
</Post>