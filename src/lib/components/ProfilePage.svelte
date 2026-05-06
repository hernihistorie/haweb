<script lang="ts">
    import type { Snippet } from "svelte";
    import Arrow from "$lib/components/Arrow.svelte";
    import Avatar from "$lib/components/Avatar.svelte";
    import { localizeHref } from "$lib/paraglide/runtime";
	import Meta from "./layout/Meta.svelte";

    export interface ProfileData {
        name: string;
        role: string;
        avatarUrl: string;
        isMember: boolean;
        blogHref?: string;
        blogLabel?: string;
    }

    interface Props {
        profile: ProfileData;
        children: Snippet;
        trailer?: Snippet;
    }

    const { profile, children, trailer }: Props = $props();
</script>

<Meta title="{profile.name} - Profil" />

<article class="profile" class:isMember={profile.isMember}>
    <div class="card">
        <div class="card-header">
            {#if profile.isMember}
                Profil člena spolku Herní Historie, z. s.
            {:else}
                Profil člena komunity
            {/if}
        </div>
        <header>
            <div class="avatar">
                <Avatar img={{ url: profile.avatarUrl }} />
            </div>
            <div>
                <h2>{profile.name}</h2>
                <p class="title">{profile.role}</p>
            </div>
        </header>
        <section>
            {@render children()}
        </section>
    </div>
    {#if profile.blogHref}
        <Arrow href={profile.blogHref}>{profile.blogLabel ?? `Blogové příspěvky od ${profile.name}`}</Arrow>
    {/if}
    {#if trailer}
        {@render trailer()}
    {/if}
    <a href={localizeHref('/profiles')} class="backlink">Členové spolku a komunity</a>
</article>

<style>
    article.profile {
        max-width: 540px;
        margin: 0 auto;
    }

    .card {
        margin: 1em auto;
        border: 4px solid var(--color-secondary);
    }

    .card-header {
        border-bottom: 4px solid var(--color-secondary);
        font-weight: bold;
        text-align: center;
        padding-top: 0.4em;
        padding-bottom: 0.4em;
    }

    .isMember .card-header {
        background: var(--color-secondary);
        color: var(--color-bg);
    }

    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1em;
        padding: 1em;
        border-bottom: 4px solid var(--color-secondary);

        @media (width < 500px) {
            flex-direction: column;
        }
    }

    .avatar {
        flex-shrink: 0;
    }

    header h2 {
        margin: 0;
        margin-top: 1.2em;
    }

    .title {
        font-style: italic;
        margin-top: 0.2em;
    }

    section {
        padding: 1em;
    }

    section :global(dl) {
        margin: 0;
    }
</style>
