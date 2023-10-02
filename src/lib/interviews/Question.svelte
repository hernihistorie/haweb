<script lang="ts">
    export let speaker: string = "";
</script>

<div class="question">
    <strong>{ speaker }:</strong> <slot />
</div>

<style>
    .question {
        /* font-size: larger; */
        text-align: left;
        margin-left: 60px;
        margin-bottom: 20px;
        font-style: italic;
        line-height: 1.4;
    }
</style>