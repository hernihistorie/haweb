# haweb

EN: This is the source code repository for the official [Czechoslovak Game Archive](https://herniarchiv.cz/) website.

CS: Toto je repozitář zdrojového kódu oficiálních webových stránek pro [Československý herní archiv](https://herniarchiv.cz/).

## Developing

This website is written in Sveltekit.

To set up the project, make a clone of the repository and run:

```bash
# set up submodules
./update_submodules.sh

# install dependencies
npm install --force

# run dev server
npm run dev
```

## Deployment

If you wish to release a new version on herniarchiv.cz, run the deploy script:

```bash
./ops/deploy.sh
```

It will ask for your password on the herniarchiv.cz server.

## Searching the website

`npm run build` also builds the Pagefind index of the website, into `build/search-index`, with `scripts/build_search_index.ts`. It crawls the built server, so every page linked on the site is searchable, whether prerendered or not. To leave a page out, return `hideFromSearch: true` from its load function, or mark parts of it with `data-pagefind-ignore`. The dev server serves the index of the last build, so run `npm run build` once to try searching in development.

## Searching the collection

The search also covers public assets from rhinventory. They have their own Pagefind index, separate from the one of the website, which is built from rhinventory's `/public-search.json` and served from `ASSET_INDEX_DIR` by `src/routes/pagefind-assets`.

To build it locally (use `INVENTORY_ORIGIN=http://127.0.0.1:5000` for a local rhinventory):

```bash
npm run build:asset-index
```

On the server, `haweb-asset-index.timer` from [hernihistorie/infra](https://github.com/hernihistorie/infra) rebuilds it every night. Setting it up:

1. Deploy rhinventory with `/public-search.json`.
2. Run the hhbox playbook in the infra repository, which sets up the timer and the directory for the index.
3. Deploy haweb with `./ops/deploy.sh`, which also restarts it with that directory mounted.
4. Build the first index with `sudo systemctl start haweb-asset-index.service`.

An asset made private stays in the index until the next rebuild, though its page isn't accessible. If it needs to disappear sooner, rebuild the index right away:

```bash
sudo systemctl start haweb-asset-index.service
```

## Large files

Files too large for the repository or the server, such as the Bulánci maps (`/projects/bulanci/maps/files/<id>.eap`), live on coruscant, the NAS, in the home of its user `haweb`. `serveCoruscantFile()` in `src/lib/server/coruscant.ts` sends one after the route has checked that it may: in production, nginx on hhbox sends it from a read-only mount of that home (`CORUSCANT_X_ACCEL_REDIRECT`, see [hernihistorie/infra](https://github.com/hernihistorie/infra)). To add a collection, put its directory in that home on coruscant (the Bulánci maps are uploaded by `deploy_maps.py` in bulanci-map-sorter) and serve its files from a route like `src/routes/projects/bulanci/maps/files`.

In development, point `CORUSCANT_DIR` at a local directory laid out like that home, e.g. one with a `bulanci-maps` symlink to bulanci-map-sorter's `_MAPS_`:

```bash
CORUSCANT_DIR=/path/to/coruscant npm run dev
```

The Play button on a map's page loads the Bulánci web player from `/play/bulanci/` with the map's file. The player isn't part of the website: in production nginx serves it ([hernihistorie/bulanci](https://github.com/hernihistorie/bulanci), `player/`), and the dev server proxies that path to the player's own server, so run `npm run serve` in `player/` next to `npm run dev` (or set `BULANCI_PLAYER_URL` if it runs elsewhere than `http://localhost:8080`).

## Contributing

If you think you can improve our website, feel free to open an issue or discuss matters with us on the [RetroHerna + Herní archiv Discord server](https://discord.gg/9jajeqZ).

## Scripts

CLI to convert scheduled Facebook posts on [https://buffer.com/](Buffer) into blog post source code. Please edit the source code afterwards to ensure a good fit for the formal style we are using on our blog, and embellish it with components such as `<Arrow />`.

```bash
npx tsx scripts/buffer_to_blog.ts
```
