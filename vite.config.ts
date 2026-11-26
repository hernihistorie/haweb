import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { pagefindBuild } from "vite-plugin-pagefind";
import { defineConfig } from "vite";
import { imagePlaceholder } from "./src/lib/vite/imagePlaceholder.ts";
import { slideText } from "./src/lib/vite/slideText.ts";

// The search index build only needs the prerendered HTML in .svelte-kit/output,
// so skip copying and hashing all the assets
const searchIndexAdapter = { name: "search-index", adapt() {} };

export default defineConfig({
    plugins: [
        imagePlaceholder(),
        enhancedImages(),
        slideText(),
        sveltekit({
            // Consult https://kit.svelte.dev/docs/integrations#preprocessors
            // for more information about preprocessors
            preprocess: vitePreprocess(),
            adapter:
                process.env.BUILD_SEARCH_INDEX === "1"
                    ? searchIndexAdapter
                    : adapter({ out: "build", precompress: false }),
            alias: { $src: "./src" },
            prerender: {
                // Many pages wait on our APIs, so render several at a time (the default is 1)
                concurrency: 8,
                handleMissingId: "warn",
                handleHttpError: "warn",
            },
        }),

        paraglideVitePlugin({
            project: "./project.inlang",
            outdir: "./src/lib/paraglide",
            strategy: ["url", "cookie", "baseLocale"],
            urlPatterns: [
                {
                    pattern: "/:path(.*)?",
                    localized: [
                        ["en", "/en/:path(.*)?"],
                        ["cs", "/:path(.*)?"],
                    ],
                },
            ],
        }),
        pagefindBuild({}),
    ],
});
