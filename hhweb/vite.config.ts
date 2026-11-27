import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

// haweb's (herniarchiv.cz's) src/lib, shared with hhweb as `$haweb/lib/...`
const hawebLib = fileURLToPath(new URL("../src/lib", import.meta.url));

export default defineConfig({
    plugins: [
        sveltekit({
            preprocess: vitePreprocess(),
            adapter: adapter({ out: "build", precompress: false }),
        }),
    ],
    resolve: {
        // Mirrored by `paths` in tsconfig.json
        alias: { "$haweb/lib": hawebLib },
    },
    server: {
        fs: { allow: [hawebLib] },
    },
});
