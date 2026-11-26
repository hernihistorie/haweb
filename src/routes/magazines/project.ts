import type { Project } from "$src/types";
import image from "./project.jpg?w=1200;800;400&enhanced&placeholder";

export const projectMagazines: Project = {
    name: {
        cs: "Databáze časopisů",
        en: "Magazine Database",
    },
    fullname: {
        cs: "Databáze českých a slovenských herních časopisů",
        en: "Czech and Slovak Game Magazines Database",
    },
    type: "project",
    url: "/magazines/",
    image,
    description: {
        cs: "Tvoříme knihovnu českých a slovenských herních časopisů včetně digitalizace. Veřejná databáze katalogizuje jednotlivá vydání a odkazuje na skeny.",
        en: "We are building a library of Czech and Slovak game magazines, which we are gradually digitizing. The public database catalogs individual issues and links to scans.",
    },
};
