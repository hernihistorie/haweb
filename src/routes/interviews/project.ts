import type { Project } from "$src/types";
import image from "../../../static/photos/homepage/rozhovory.jpg?w=800;400&enhanced";

export const projectInterviews: Project = {
    name: {
        cs: "Rozhovory",
        en: "Interviews",
    },
    type: "project",
    url: "/interviews/",
    image,
    description: {
        cs: "Neustále se rozšiřující sbírka rozhovorů s představiteli české a slovenské videoherní kultury. Tato svědectví rozšiřují poznání o tuzemské videoherní scéně způsobem, který nemohou jiné historické prameny nabídnout.",
        en: "A continuously expanding collection of interviews with representatives of Czech and Slovak gaming culture. These testimonies expand our knowledge of the domestic video game scene in a way that other historical sources cannot offer.",
    },
};
