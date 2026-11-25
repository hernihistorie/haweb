import type { Project } from "$src/types";
import image from "../../../../static/photos/homepage/sbirka.jpg?w=800;400&enhanced";

export const projectSbirka: Project = {
    name: {
        cs: "Sbírka",
        en: "Collection",
    },
    type: "project",
    url: "/inventory/",
    image,
    description: {
        cs: "V evidenci vedeme více než 8 000 předmětů, mezi něž spadají hlavně, nikoliv však pouze videohry na původních nosičích, herní konzole a počítače, periferie, přepisovatelná média s uživatelskými programy a literatura.",
        en: "We maintain a registry of more than 8,000 items, which include primarily, but not exclusively, video games on original media, gaming consoles and computers, peripherals, rewritable media with user programs, and literature.",
    },
};
