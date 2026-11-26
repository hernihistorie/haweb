import type { Project } from "$src/types";
import image from "./project.jpg?w=1600;800;400&enhanced&placeholder";

export const projectFrantisekStarekCunas: Project = {
    name: {
        cs: "Fond Františka Stárka Čuňase",
        en: "František Stárek Čuňas Collection",
    },
    type: "fond",
    url: "/projects/frantisek-starek-cunas/",
    year: 2026,
    inMenu: true,
    image,
    description: {
        cs: "Redakce samizdatového časopisu <i>Vokno</i> začala v 80. letech v rámci své činnosti experimentovat s osobními počítači. Fond obsahuje kazety šéfredaktora <i>Vokna</i> Františka Stárka s originálními programy od redakce.",
        en: "The staff of the samizdat magazine <i>Vokno</i> began experimenting with personal computers as part of their activities in the 80s. The collection contains tapes of <i>Vokno</i> editor František Stárek featuring programs created by the editorial staff.",
    },
};
