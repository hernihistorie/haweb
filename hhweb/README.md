# hhweb

The website of [Herní historie, z.s.](https://hernihistorie.cz/), the nonprofit behind the [Czechoslovak Game Archive](https://herniarchiv.cz/). It used to live in its own repository, [retroherna/hhweb](https://github.com/retroherna/hhweb).

It's a SvelteKit app of its own, kept in the haweb repository as an npm workspace so the two can share code.

## Developing

Install the dependencies from the repository root (`npm install --force`), then run either of these:

```bash
# from the repository root
npm run dev:hh

# from hhweb/
npm run dev
```

`npm run check` and `npm run build` work the same way (`check:hh` and `build:hh` from the root).

## Sharing code with haweb

haweb's `src/lib` can be imported as `$haweb/lib/...`:

```svelte
<script lang="ts">
    import Notice from "$haweb/lib/components/Notice.svelte";
</script>
```

Inside haweb's files, `#lib/...` and relative imports keep working. But hhweb doesn't know haweb's `$src` alias, or anything outside `src/lib`. So before sharing a file that imports `$src/...` (often just `$src/types`), switch those imports to `#lib/...`, moving what they point to into `src/lib` if needed. Messages and locales from haweb's paraglide setup aren't available to hhweb yet either.

## Deployment

```bash
./ops/deploy-hh.sh
```

It builds the image with [`hhweb/Dockerfile`](Dockerfile) from the haweb checkout on the server (its context is the repository root, so it can copy `src/lib`) and restarts `hhweb.service`, which is set up in [hernihistorie/infra](https://github.com/hernihistorie/infra).
