import type { Project } from "$src/types";
import bannerImage from "./banner.jpg?w=1420;800;400&enhanced";
import image from "./project.jpg?w=800;400&enhanced";

export const projectVideostop: Project = {
    name: "Videostop",
    fullname: {
        cs: "Projekt Videostop",
        en: "Project Videostop",
    },
    type: "project",
    url: "/projects/videostop/",
    image,
    bannerImage,
    description: {
        cs: "Videostop byl populární soutěžní pořad vysílaný mezi lety 1985 a 2000 na ČST. V rámci projektu byly shromážděny materiály týkající se hry, která figurovala na konci každého dílu pořadu.",
        en: "Videostop was a popular game show broadcast between 1985 and 2000 on Czechoslovak Television. This project gathered materials related to the game that appeared at the end of each episode of the show.",
    },
};
