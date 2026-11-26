import type { Project } from '$src/types';
import headline from "./img/bulanci_headline.jpg?w=1600;800;400&enhanced&placeholder";
import menu from "./img/bulanci_menu.jpg?w=660;330&enhanced";
import miniature from "./img/bulanci_miniature.jpg?w=1200;800;400&enhanced&placeholder";

export const projectBulanci: Project = {
    name: {
        cs: "Bulánci",
        en: "Bulánci"
    },
    fullname: {
        cs: "Projekt Bulánci",
        en: "Project Bulánci"
    },
    type: "project",
    url: "/projects/bulanci/",
    year: 2026,
    inMenu: true,
    image: miniature,
    bannerImage: headline,
    bannerUncropped: true,
    menuImage: menu,
    description: {
        cs: "Kultovní střílečka <i>Bulánci</i> z roku 2001 patřila ve své době mezi nejvíce šířené české hry na internetu. Projekt mapuje internetové aktivity jejích fanoušků a obsahuje archiv přibližně 750 fanouškovských map, přehled 56 webů a rozhovory s fanoušky i autory hry.",
        en: "The cult 2001 shooter <i>Bulánci</i> was one of the most widely shared Czech games on the internet in its day. This project documents the online activities of its fans, and includes an archive of approximately 750 fan-made maps, an overview of 56 websites, and interviews with both fans and the game's developers."
    }
};
