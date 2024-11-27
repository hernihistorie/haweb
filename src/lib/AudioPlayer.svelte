<!--
    Largely lifted from https://learn.svelte.dev/tutorial/media-elements
    Under MIT license
-->
<script lang="ts">
	import { persisted } from 'svelte-persisted-store'

	interface Props {
		src: string;
		title: string;
		duration?: number;
	}

	let { src, title, duration = $bindable(0) }: Props = $props();

	const time = persisted(`playerPosition-${title}`, 0);
	let paused = $state(true);
	let volume = $state(1);
	let oldVolume = $state(1);
	const max_volume = 1;

	function format_time(time: number): string {
		if (isNaN(time) || time == 0) return '--:--';

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	}

	function make_slider_pointerdown(setValue: (value: number) => void, max_value: number, x: boolean) {
		function func(e: PointerEvent) {
			const div = e.currentTarget;
			
			function seek(e: PointerEvent) {
				let p: number;
				const { left, width, top, height } = div.getBoundingClientRect();
				if (x) {
					p = (e.clientX - left) / width;
				} else {
					p = 1 - (e.clientY - top) / height;
				}
				if (p < 0) p = 0;
				if (p > 1) p = 1;
				
				setValue(p * max_value);
			}

			seek(e);

			window.addEventListener('pointermove', seek);

			window.addEventListener('pointerup', () => {
				window.removeEventListener('pointermove', seek);
			}, {
				once: true
			});
		}
		return func;
	}

	let time_pointerdown = make_slider_pointerdown((value) => time.set(value), duration, true);
	let volume_pointerdown = make_slider_pointerdown((value) => volume = value, max_volume, false);
</script>

<div class="player" class:paused>
	<audio
		{src}
		bind:currentTime={$time}
		bind:duration
		bind:paused
		bind:volume
		preload="metadata"
		onloadeddata={(e) => {
			// workaround bug of time being reset
			e.currentTarget.currentTime = $time;
		}}
		onended={() => {
			time.set(0);
		}}
	></audio>
	
	<button
		class="play"
		aria-label={paused ? 'play' : 'pause'}
		onclick={() => paused = !paused}
	></button>

	<div class="info">
		<div class="description">
			<strong>{title}</strong>
		</div>

		<div class="time">
			<span class="time-text">{format_time($time)}</span>
			<div
				class="slider"
				onpointerdown={time_pointerdown}
			>
				<div class="progress" style="--progress: {$time / duration}"></div>
			</div>
			<span>{format_time(duration)}</span>
		</div>
	</div>
	<div class="volume-section">
		<button
			class="speaker-icon"
			aria-label="mute"
			onclick={() => {
				if (volume == 0) {
					volume = oldVolume;
				} else {
					oldVolume = volume;
					volume = 0;
				}
			}}
		>
		</button>
		<div
			class="volume-slider"
			onpointerdown={volume_pointerdown}
		>
			<div class="volume-progress" style="--progress: {1-volume}"></div>
		</div>
	</div>
</div>

<style>
	.player {
		display: grid;
		grid-template-columns: 2.5em 1fr auto;
		align-items: center;
		gap: 1em;
		padding: 0.5em 1em 0.5em 0.5em;
		border-radius: 2em;
		background: var(--bg-1);
		transition: filter 0.2s;
		color: var(--fg-3);
		user-select: none;
        transition: padding 0.3s ease-in-out, margin 0.3s ease-in-out;
	}

	.player:not(.paused) {
		color: var(--fg-1);
		filter: drop-shadow(0.5em 0.5em 1em rgba(0,0,0,0.1));
	}
	
	button {
		width: 100%;
		aspect-ratio: 1;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		border-radius: 50%;
        border-color: var(--color-primary);
        border-style: solid;
        background-color: transparent;
	}

    button:active {
        background-color: rgba(0, 0, 0, 0.1);
    }
	
	[aria-label="pause"] {
		background-image: url(/audio_player/pause.svg);
	}

	[aria-label="play"] {
		background-image: url(/audio_player/play.svg);
	}
	.speaker-icon {
		border: none;
		width: 1.5em;
		height: 1.5em;
		background-image: url(/audio_player/speaker.svg);
		background-size: cover;
	}

	.info {
		overflow: hidden;
	}

	.description {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 1.2;
	}

	.time {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}

	.time span {
		font-size: 0.7em;
	}

	.volume-section {
		display: flex;
		align-items: end;
		gap: 0.3em;
	}

	.slider {
		width: 100%;
		height: 0.5em;
		background: var(--color-bg);
		border-radius: 0.5em;
		overflow: hidden;
        border: 2px solid var(--color-secondary);
	}

	.progress {
		width: calc(100% * var(--progress));
		height: 100%;
		background: var(--color-secondary);
	}

	.volume-slider {
		flex: 1;
		width: 0.5em;
		height: 2em;
		background: var(--color-secondary);
		border-radius: 0.5em;
		overflow: hidden;
        border: 2px solid var(--color-secondary);
	}

	.volume-progress {
		height: calc(100% * var(--progress));
		background: var(--color-bg);
	}

    .time-text {
        width: 30px;
        font-variant: font-variant-numeric;
        /*font-family: monospace;*/ /* TODO find a nice monospaced font */
    }

	@media only screen and (max-width: 500px) {
		.player {
			padding: 0;
		}
	}

	@media only screen and (max-width: 400px) {
		.player {
			margin-left: -0.5em;
			margin-right: -0.5em;
			gap: 0.3em;
		}
	}

	@media only screen and (max-width: 300px) {
		.time {
			flex-direction: column;
			gap: 0;
		}
		.slider {
			width: 90%;
		}
	}
</style>