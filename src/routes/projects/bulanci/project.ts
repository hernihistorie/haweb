import type { Project } from '$src/types';
import headline from "./img/bulanci_headline.jpg?w=1600&format=jpg&imagetools";
import menu from "./img/bulanci_menu.jpg?w=660&format=jpg&imagetools";
import miniature from "./img/bulanci_miniature.jpg?w=1200&format=jpg&imagetools";

export const projectBulanci: Project = {
    name: {
        cs: "Bulánci",
        en: "Bulánci"
    },
    type: "project",
    url: "/projects/bulanci/",
    image: miniature,
    bannerImage: headline,
    bannerAspectRatio: "2/1",
    menuImage: menu,
    description: {
        cs: "Kultovní střílečka <i>Bulánci</i> z roku 2001 patřila ve své době mezi nejvíce šířené české hry na internetu. Projekt mapuje internetové aktivity jejích fanoušků a obsahuje archiv přibližně 750 fanouškovských map, přehled 56 webů a rozhovory s fanoušky i autory hry.",
        en: "The cult 2001 shooter <i>Bulánci</i> was one of the most widely shared Czech games on the internet in its day. This project documents the online activities of its fans, and includes an archive of approximately 750 fan-made maps, an overview of 56 websites, and interviews with both fans and the game's developers."
    }
};
