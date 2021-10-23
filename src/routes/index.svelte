<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import Box from '$lib/Box.svelte';
	import BlogBox from '$lib/BlogBox.svelte';
</script>

<Hero />

<div class="boxes">
    <Box href="/o-nas">
        <h2>O nás</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam alias id explicabo, amet consequuntur suscipit commodi delectus sapiente perspiciatis eius, dignissimos voluptatum? Aspernatur expedita molestiae fugiat laudantium amet itaque laboriosam!
        </p>
    </Box>
    <Box href="/o-nas">
        <h2>Mise a cíle</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam alias id explicabo, amet consequuntur suscipit commodi delectus sapiente perspiciatis eius, dignissimos voluptatum? Aspernatur expedita molestiae fugiat laudantium amet itaque laboriosam!
        </p>
    </Box>

    <Box href="/o-nas">
        <h2>Projekty</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam alias id explicabo, amet consequuntur suscipit commodi delectus sapiente perspiciatis eius, dignissimos voluptatum? Aspernatur expedita molestiae fugiat laudantium amet itaque laboriosam!
        </p>
    </Box>
    <Box href="/o-nas">
        <h2>Služby a technologie</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam alias id explicabo, amet consequuntur suscipit commodi delectus sapiente perspiciatis eius, dignissimos voluptatum? Aspernatur expedita molestiae fugiat laudantium amet itaque laboriosam!
        </p>
    </Box>

    <div class="filler">
		<img src="/illu/illu_03.png" alt="">
    </div>
    <Box href="/o-nas">
        <h2>Sbírka</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam alias id explicabo, amet consequuntur suscipit commodi delectus sapiente perspiciatis eius, dignissimos voluptatum? Aspernatur expedita molestiae fugiat laudantium amet itaque laboriosam!
        </p>
    </Box>
</div>

<!--
    <h2>Blog</h2>
    <BlogBox href="/blog/1">
        <h2><a href="">Spuštěn nový web</a></h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam alias id explicabo, amet consequuntur suscipit commodi delectus sapiente perspiciatis eius, dignissimos voluptatum? Aspernatur expedita molestiae fugiat laudantium amet itaque laboriosam!
        </p>
    </BlogBox>
-->

<style>
    .boxes {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .boxes > :global(div) {
        width: calc(50% - 16px);
    }

    .filler {
        display: flex;
    }
    .filler img {
        height: 180px;
        margin: auto;
    }

    @media only screen and (max-width: 750px) {
        .boxes > :global(div) {
            width: 100%;
        }

        .filler img {
            height: 160px;
            margin: auto;
        }
    }

    @media only screen and (max-width: 500px) {
        .filler img {
            height: 120px;
            margin: auto;
        }
    }
</style>