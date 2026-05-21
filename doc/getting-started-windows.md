# Jak rozjet haweb na Windowsech
V tomto dokumentu se dozvíme jak rozchodit vývojové prostředí pro naše webové stránky na zařízení s operačním systémem Windows.

## Terminologický slovník (glosář)
- haweb
	- Web Herního archivu (https://herniarchiv.cz/)
	- Repozitář se nachází na https://github.com/hernihistorie/haweb (proteď)
- Svelte
	- JavaScriptový framework na tvorbu dynamických webových komponent
	- Sveltekit je vrstva nad tím na tvorbu celých webů
- Node.js
	- Prostředí na spouštění JavaScriptových programů (runtime)
- npm (Node.js package manager)
	- Správce balíčků a závislostí pro Node.js
- nvm (Node Version Manager)
	- Manažer verzí pro Node.js.  Umožňuje mít různé verze nainstalované naráz a přepínat mezi nimi.
- VS Code
	- IDEčko, které bude sloužit jako naše vývojové prostředí.

## Návod

### Instalace nvm-windows, Node.JS, a npm
1. Budeme následovat návod od Microsoftu na instalaci nvm-windows, Node.JS, a npm: [Set up Node.js on native Windows \| Microsoft Learn](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows):
	1. Nainstalujeme nvm-windows z [GitHub - coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go. · GitHub](https://github.com/coreybutler/nvm-windows#installation--upgrades):
		1. Stáhjeme a nainstalujeme instalátor [nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases/download/1.2.2/nvm-setup.exe)
2. V PowerShellu nainstalujeme verzi `nvm` co používá haweb zapomocí příkazu `nvm install 22`
3. Nastavíme používání této verze: `nvm use 22`

### Rozjetí projetku ve VS Code
1. Stáhneme, nainstalujeme, a pustíme [VS Code](https://code.visualstudio.com/)  
2. V levém panelu otevřeme Source Control (ikonka větví)  
3. Klikneme na Clone Repository  
4. Zadáme URL repozitáře hawebu, to je `https://github.com/hernihistorie/haweb`
5. Zvolíme složku, do které se nechá vytvořit složka s repozitářem hawebu
6. Počkáme, až se to doklonuje
7. Otevřeme naklonovanou složku
8. Zvolíme, že důveřujete autorům
9. Z popupu vpravo dole necháme nainstalovat doporučená rozšíření do VS Code
10. Dole v terminálu by se sama měla spustit instalace závislostí.  V případě že ne, otevřeme nový terminál (v menu pro spodní panel přepneme na Terminal, a vpravo klikneme na plusko na otevření nového).  Napíšeme `npm install` a poté `npm run dev`.  Pro oba příkazy jsou některá varování v pořádku.
11. Pokud vidíme `→ Local:   http://localhost:5173/`, vývojový server se spustil úspěšně.  Můžeme ho otevřít v zabudovaném prohlížeči VS Code pomocí Ctrl+Click.  Okno můžeme převést do našeho oblíbeného prohlížeče pomocí možnosti "Open in external browser" v menu prohlížeče VS Code (tři tečky vpravo).
12. Ve VS Code si rozklikneme vlevo `src/routes/+page.svelte`
13. Pokud nám vyskočí vpravo dole okýnko "The Svelte for VS Code extension now contains a TypeScript plugin", povolíme ho.
14. Nad řádek `<Hero />` vepíšeme text "Ahoj světe!" a pomocí Ctrl+S stránku uložíme.
15. Přepneme do prohlížeče a měli bychom vidět jak se nový text sám objeví na stránce.

🎉 Máme funkční vývojové prostředí pro haweb.

## Další kroky
- Přečíst si něco o tom jak funguje Svelte v interaktivním [Svelte tutoriálu](https://svelte.dev/tutorial/svelte/welcome-to-svelte)
- Vytvořit si na Githubu fork [repozitáře hawebu](https://github.com/hernihistorie/haweb) a vyzkoušet si do něj commitnout a pushnout testovací změnu

### Odkazy na dokumentaci
- Dokumentace k HTML, CSS, a JavaScriptu: [MDN Web Docs](https://developer.mozilla.org/en-US/)
- Dokumentace k TypeScriptu: [TypeScript: The starting point for learning TypeScript](https://www.typescriptlang.org/docs/)
- Dokumentace ke Svelte: [Overview • Svelte Docs](https://svelte.dev/docs/svelte/overview)
- Dokumentace ke SvelteKitu: [Introduction • SvelteKit Docs](https://svelte.dev/docs/kit/introduction)
