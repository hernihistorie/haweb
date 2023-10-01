<script lang="ts">
	import Post from "./Post.svelte";

    export let author_name: string;
    export let date: string;
    export let title: string;
</script>

<Post title={title}>
    <div slot="side">
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
    <div slot="content">
        <h2>{title}</h2>
        <slot />
    </div>
</Post>