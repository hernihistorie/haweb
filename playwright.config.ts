import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    webServer: {
        command: "npm run preview",
        port: 4173,
    },
    // Tests live in tests/, or next to the component they test as *.e2e.ts
    testDir: ".",
    testMatch: [/\/tests\/([^/]+\.)?(test|spec)\.[jt]s$/, /\/src\/.+\.e2e\.[jt]s$/],
    testIgnore: ["**/node_modules/**", "**/.svelte-kit/**", "**/build/**"],
};

export default config;
