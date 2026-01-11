import type { Author } from "$src/types";


export const authors: Record<string, Author> = {
    HerniHistorie: {
        slug: "herni-historie",
        name: 'Herní historie',
        nameGenitive: 'Herní historie',
        image: {
            url: '/images/ha_logo.png',
            alt: 'Logo Herní historie'
        },
        noBacklink: true
    },
    Capa: {
        slug: "capa",
        name: 'Čápa',
        nameGenitive: 'Čápy'
    },
    RudolfJanSuchy: {
        slug: "rudolf-jan-suchy",
        name: 'Rudolf Jan Suchý',
        nameGenitive: 'Rudolfa Jana Suchého'
    },
    JiriBernasek: {
        slug: "jiri-bernasek",
        name: 'Jiří Bernášek',
        nameGenitive: 'Jiřího Bernáška'
    },
    JakubSkrdlaSnail: {
        slug: "jakub-skrdla-snail",
        name: 'Jakub Škrdla (Snail)',
        nameGenitive: 'Jakuba Škrdly (Snaila)'
    },
};

export const authorsBySlug: Record<string, Author> = Object.fromEntries(
    Object.values(authors).map(author => [author.slug, author])
);