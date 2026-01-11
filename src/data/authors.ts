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
    JakubSkrdla: {
        slug: "jakub-skrdla",
        name: 'Jakub Škrdla',
        nameGenitive: 'Jakuba Škrdly',
        bio: {
            cs: "Jakub je hráč, kterého fascinují prapodivná zákoutí herní historie, a herní výzkumník, zaměřený na environmentální vyprávění. Aktuálně studuje doktorát na Masarykově univerzitě; pokud se tam potkáte, rád si popovídá o uměleckých hrách a level designu.",
            en: "Jakub is a gamer fascinated by the strange corners of game history, and a game researcher focused on environmental storytelling. He is currently pursuing a PhD at Masaryk University; should you meet him there, he would be happy to chat about art games and level design."
        },
        image: {
            url: '/images/authors/jakub_skrdla.jpg'
        }
    },
};

export const authorsBySlug: Record<string, Author> = Object.fromEntries(
    Object.values(authors).map(author => [author.slug, author])
);