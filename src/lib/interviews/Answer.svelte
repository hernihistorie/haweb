<script lang="ts">
    export let speaker: string = "";
</script>

<div class="answer">
    <strong>{ speaker }:</strong> <slot />
</div>

<style>
    .answer {
        /* Brambora doesn't want this */
        /* text-align: justify; */
        margin-bottom: 20px;
        line-height: 1.4;
    }
</style>