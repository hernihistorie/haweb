import type { Author } from "$src/types";
import photo from "./photo.jpg?w=300&format=jpg&imagetools";

const author: Author = {
    slug: "jakub-skrdla",
    name: "Jakub Škrdla",
    nameGenitive: "Jakuba Škrdly",
    bio: {
        cs: "Jakub je hráč, kterého fascinují prapodivná zákoutí herní historie, a herní výzkumník, zaměřený na environmentální vyprávění. Aktuálně studuje doktorát na Masarykově univerzitě; pokud se tam potkáte, rád si popovídá o uměleckých hrách a level designu.",
        en: "Jakub is a gamer fascinated by the strange corners of game history, and a game researcher focused on environmental storytelling. He is currently pursuing a PhD at Masaryk University; should you meet him there, he would be happy to chat about art games and level design.",
    },
    image: {
        url: photo,
    },
};

export default author;
