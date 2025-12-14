<script lang="ts">
  interface Props {
    title: string;
    children?: import('svelte').Snippet;
  }

  let { title, children }: Props = $props();
</script>

<section class="chapter">
    <!-- <div class="anchor" id="chapter-{chapter.slug}"></div> -->
    <h3>{title}</h3>
    <div class="chapter-contents">
        {@render children?.()}
    </div>
</section>

<style>
h3 {
    position: relative;
    top: -200px;
    visibility: hidden;
    margin: 0;
    font-size: 0;
}

.chapter-contents {
    border-left: 2px solid transparent;
    padding-left: 1em;
}

h3:target ~ .chapter-contents {
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