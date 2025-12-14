<script lang="ts">
	import { browser } from '$app/environment';
    import SunIcon from '@lucide/svelte/icons/sun';
    import MoonIcon from '@lucide/svelte/icons/moon';
    import SunMoonIcon from '@lucide/svelte/icons/sun-moon';

    type Theme = 'light' | 'dark';
	type ThemeChoice = Theme | 'auto';

    // Read the initial value synchronously to avoid flash
    function getInitialThemeChoice(): ThemeChoice {
        if (!browser) return 'auto';
        const stored = localStorage.getItem('theme');
        if (stored === 'light' || stored === 'dark' || stored === 'auto') {
            return stored;
        }
        return 'auto';
    }
    
    let themeChoice = $state<ThemeChoice>(getInitialThemeChoice());
    
    function getSystemTheme(): Theme {
        if (!browser) return 'light';
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

	let systemTheme = $state<Theme>(getSystemTheme());
	
    if (browser) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            systemTheme = e.matches ? 'dark' : 'light';
        });
    }

    let effectiveTheme = $derived(themeChoice === 'auto' ? systemTheme : themeChoice);
    
    $effect(() => {
		if (!browser) return;
        document.documentElement.dataset.theme = effectiveTheme;
    });

    function setThemeChoice(value: ThemeChoice) {
        themeChoice = value;
        localStorage.setItem('theme', value);
    }

	function cycleTheme() {
		if (themeChoice === 'auto') {
			// When in auto, go to the opposite of the current effective theme
			setThemeChoice(effectiveTheme === 'light' ? 'dark' : 'light');
		} else if (themeChoice === 'light') {
			setThemeChoice(systemTheme === 'dark' ? 'auto' : 'dark');
		} else {
			setThemeChoice(systemTheme === 'light' ? 'auto' : 'light');
		}
	}

	const labels: Record<ThemeChoice, string> = {
		auto: 'Auto (system)',
		light: 'Light mode',
		dark: 'Dark mode'
	};
</script>

<button
	class="theme-toggle"
	onclick={cycleTheme}
	aria-label={labels[themeChoice]}
	title={labels[themeChoice]}
>
	{#if themeChoice === 'auto'}
		<SunMoonIcon />
	{:else if themeChoice === 'light'}
		<SunIcon />
	{:else}
		<MoonIcon />
	{/if}
</button>

<style>
	.theme-toggle {
		background: transparent;
		border: none;
		padding: 4px;
        margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-text);
		transition: color 0.2s ease;
	}

	.theme-toggle:hover {
		color: var(--color-primary);
	}
</style>