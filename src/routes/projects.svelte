<script>
	import Box from '$lib/Box.svelte';
</script>

<h3>Projekty</h3>
<div class="projects">
    <div class="timeline-line"></div>
    <Box left>
        <h3><span class="year">2021</span> Název projektu</h3>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam alias id explicabo, amet consequuntur suscipit commodi delectus sapiente perspiciatis eius, dignissimos voluptatum? Aspernatur expedita molestiae fugiat laudantium amet itaque laboriosam!
        </p>
    </Box>

    <Box right>
        <h3><span class="year">2021</span> Název projektu</h3>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam alias id explicabo, amet consequuntur suscipit commodi delectus sapiente perspiciatis eius, dignissimos voluptatum? Aspernatur expedita molestiae fugiat laudantium amet itaque laboriosam!
        </p>
    </Box>

    <Box left>
        <h3><span class="year">2021</span> Název projektu</h3>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam alias id explicabo, amet consequuntur suscipit commodi delectus sapiente perspiciatis eius, dignissimos voluptatum? Aspernatur expedita molestiae fugiat laudantium amet itaque laboriosam!
        </p>
    </Box>

    <Box right>
        <h3><span class="year">2021</span> Název projektu</h3>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam alias id explicabo, amet consequuntur suscipit commodi delectus sapiente perspiciatis eius, dignissimos voluptatum? Aspernatur expedita molestiae fugiat laudantium amet itaque laboriosam!
        </p>
    </Box>
</div>

<style>
    .projects {
        position: relative;
    }

    .timeline-line {
        position: absolute;
        left: calc(50% - 1px);
        height: 100%;
        border-right: 2px solid var(--color-secondary);
    }

    @media only screen and (max-width: 700px) {
        .timeline-line {
            left: calc(4px);
        }
    }
</style>