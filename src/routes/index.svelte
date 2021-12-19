<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import Box from '$lib/Box.svelte';
	import BlogBox from '$lib/BlogBox.svelte';
</script>

<Hero />

<div class="boxes">
    <Box href="/o-nas">
        <h3>O nás</h3>
        <p>
            Jsme projekt spolku Herní historie, jehož cílem je zachovávat herní historii v rámci
České a Slovenské republiky. Naší hlavní činností je katalogizace a archivace všech
artefaktů spojených s herní historií, jako například časopisy, dobová zařízení nebo
média obsahující videoherní obsah. Spolupracujeme s řadou mezinárodních organizací
a chceme se zasloužit o to, aby u nás existovala oficiální instituce zastřešující
lokální stopu v tomto odvětví kultury.
        </p>
    </Box>
    <Box href="/o-nas">
        <h3>Mise a cíle</h3>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam alias id explicabo, amet consequuntur suscipit commodi delectus sapiente perspiciatis eius, dignissimos voluptatum? Aspernatur expedita molestiae fugiat laudantium amet itaque laboriosam!
        </p>
    </Box>

    <Box href="/o-nas">
        <h3>Projekty</h3>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam alias id explicabo, amet consequuntur suscipit commodi delectus sapiente perspiciatis eius, dignissimos voluptatum? Aspernatur expedita molestiae fugiat laudantium amet itaque laboriosam!
        </p>
    </Box>
    <Box href="/o-nas">
        <h3>Služby a technologie</h3>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam alias id explicabo, amet consequuntur suscipit commodi delectus sapiente perspiciatis eius, dignissimos voluptatum? Aspernatur expedita molestiae fugiat laudantium amet itaque laboriosam!
        </p>
    </Box>

    <div class="filler">
		<img src="/illu/illu_03.png" alt="">
    </div>
    <Box href="/o-nas">
        <h3>Sbírka</h3>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam alias id explicabo, amet consequuntur suscipit commodi delectus sapiente perspiciatis eius, dignissimos voluptatum? Aspernatur expedita molestiae fugiat laudantium amet itaque laboriosam!
        </p>
    </Box>
</div>

<!--
    <h3>Blog</h3>
    <BlogBox href="/blog/1">
        <h3><a href="">Spuštěn nový web</a></h3>
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