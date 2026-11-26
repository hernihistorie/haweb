import type { Project } from "$src/types";
import image from "./project.jpg?w=800;400&enhanced&placeholder";

export const projectOuya: Project = {
    name: "Ouya",
    type: "project",
    url: "https://www.vice.com/en/article/ouya-is-shutting-down-and-fans-are-preserving-games-before-they-disappear/",
    year: 2019,
    image,
    description: {
        cs: "Ouya byla neúspěšná herní konzole vyráběná mezi lety 2013 až 2015. Projekt proběhl před uzavřením online storefrontu Ouyi v roce 2019 a byl snahou archivovat digitální knihovnu této platformy.",
        en: "Ouya was an unsuccessful gaming console manufactured between 2013 and 2015. This project was conducted before the closure of Ouya's online storefront in 2019 and was an effort to archive the digital library of this platform.",
    },
};
