import type { Project } from "$src/types";
import image from "./project.jpg?w=800;400&enhanced";

export const projectProgramyZCST: Project = {
    name: {
        cs: "Programy z Česko&shy;slovenské televize",
        en: "Programs from Czecho&shy;&shy;slovak Television",
    },
    fullname: {
        cs: "Projekt Programy z Česko&shy;slovenské televize",
        en: "Project Programs from Czechoslovak Television",
    },
    type: "project",
    url: "/projects/programy-z-cst/",
    image,
    description: {
        cs: "V 80. letech Československá televize odvysílala dva pořady v rámci kterých byly distribuované programy pro ZX Spectrum. Tento projekt obsahuje téměř všechny tyto programy.",
        en: "In the 1980s, Czechoslovak Television broadcast two programs during which software for the ZX Spectrum was distributed. This project contains almost all of these programs.",
    },
};
