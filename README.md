# haweb

EN: This is the source code repository for the official [Czechoslovak Game Archive](https://herniarchiv.cz/) website.

CS: Toto je repozitář zdrojového kódu oficiálních webových stránek pro [Československý herní archiv](https://herniarchiv.cz/).

## Developing

This website is written in Sveltekit.

To set up the project, make a clone of the repository and run:

```bash
npm install --force
npm run build # necessary on first run to set up pagefind
npm run dev
```

## Deployment

If you wish to release a new version on herniarchiv.cz, run the deploy script:

```bash
./ops/deploy.sh
```

It will ask for your password on the herniarchiv.cz server.

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

## Contributing

If you think you can improve our website, feel free to open an issue or discuss matters with us on the [RetroHerna + Herní archiv Discord server](https://discord.gg/9jajeqZ).

## Scripts

CLI to convert scheduled Facebook posts on [https://buffer.com/](Buffer) into blog post source code. Please edit the source code afterwards to ensure a good fit for the formal style we are using on our blog, and embellish it with components such as `<Arrow />`.

```bash
npx tsx scripts/buffer_to_blog.ts
```
