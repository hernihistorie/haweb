<script lang="ts">
	import type { Chapter } from "$src/types";

    export let chapter: Chapter;
</script>

<section class="chapter">
    <div class="anchor" id="chapter-{chapter.slug}"></div>
    <div class="chapter-contents">
        <slot />
    </div>
</section>

<style>
div.anchor {
    position: relative;
    top: -200px;
    visibility: hidden;
}

.chapter-contents {
    border-left: 2px solid transparent;
    padding-left: 1em;
}

div.anchor:target ~ .chapter-contents {
    animation: 3s ease-in-out change-color;
    animation-name: change-color;
    transition: border-left 1.3s ease-in-out;
    padding-left: 1em;
} 


@keyframes change-color {
  from {
    border-left-color: var(--color-secondary);
  }
  50% {
    border-left-color: var(--color-secondary);
  }
  to {
    border-left-color: transparent;
  }
}

</style>