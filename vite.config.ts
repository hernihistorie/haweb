import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { pagefind } from "vite-plugin-pagefind";
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale'],
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
		pagefind({
			// Configuration explained here:
			// https://github.com/Hugos68/vite-plugin-pagefind?tab=readme-ov-file#usage
			// assetsDirectory: "build",
			assetsDirectory: "static"
		}),
	]
});
