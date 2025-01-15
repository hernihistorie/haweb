<script lang="ts">
	import AssetBox from "./AssetBox.svelte";

</script>

<div>
    <AssetBox dummy={true} data={
        {
            name: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus vestibulum tellus, eget porttitor urna venenatis in.",
            inventory_url: "#"
        }
    } />
</div>

<style>
    div {
        opacity: 0.5;
    }
</style>