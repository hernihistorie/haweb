<script lang="ts">
	import Meta from "$src/lib/components/layout/Meta.svelte";
	import Loc from "$lib/components/Loc.svelte";
	import { localizeHref } from '$lib/paraglide/runtime';
	import { loc } from "$src/lib/loc";
	import LogoBlock from "$src/lib/components/LogoBlock.svelte";
	import type { Logo } from "$src/lib/logo";
	import H4Anchor from "$src/lib/components/H4Anchor.svelte";

    const partners: {title: string; logo?: Logo; url: string}[] = [
        {title: "RetroHerna", logo: {url: "/images/logos/retroherna.png"}, url: "https://retroherna.cz/"},
        {title: "Pixelarchiv.cz", logo: {url: "/images/logos/pixelarchiv.svg", background_color: 'dark'}, url: "https://nfa.cz/pixelarchiv/cs"},
        {title: "EFGAMP", logo: {url: "/images/logos/logo-efgamp-white.png", background_color: 'dark'}, url: "https://efgamp.eu/"},
        {title: "Česko-Slovenský Speccy Archiv", url: "https://cs.speccy.cz/"},
        {title: "Herní archeolog", url: "https://www.herniarcheolog.cz/"},
        {title: "Gaming Alexandria", logo: {url: "/images/logos/gaming-alexandria.png", background_color: 'light'}, url: "https://www.gamingalexandria.com/"},
        {title: "VGHF", logo: {url: "/images/logos/Video_Game_History_Foundation_logo.svg", background_color: 'dark'}, url: "https://gamehistory.org/"},
        // {title: "Oldgames.sk*", logo: {url: "/images/logos/pixelarchiv.png"}, url: "https://pixelarchiv.cz/"},
        // {title: "Visiongame*", logo: {url: "/images/logos/pixelarchiv.png"}, url: "https://pixelarchiv.cz/"},
        // {title: "Arcadehry*", logo: {url: "/images/logos/pixelarchiv.png"}, url: "https://pixelarchiv.cz/"},
        // {title: "Oldcomp.cz*", logo: {url: "/images/logos/pixelarchiv.png"}, url: "https://pixelarchiv.cz/"},
        // {title: "Bytefest", logo: {url: "/images/logos/pixelarchiv.png"}, url: "https://pixelarchiv.cz/"},

    ];
</script>

<Meta title={{
    cs: "O nás",
    en: "About Us"
}} />

<article class="thin">
    <h2>
        <Loc
            cs="O nás"
            en="About Us"
        />
    </h2>
    <p>
        <Loc>
            {#snippet cs()}
                <p>
                    Jsme projektem spolku Herní historie, jehož cílem je zachovávat herní kulturu v České a Slovenské republice. Naší hlavní činností je katalogizace, archivace a digitalizace artefaktů spojených s historií her – ať už jde o samotné hry, média jako časopisy, dobová zařízení či další související historické artefakty. Věříme, že herní historie nejsou jen dějiny slavných her a velkých vývojářů, ale že tato historie patří nám všem a že i drobné projekty, zapomenuté experimenty a zdánlivě okrajové hry si zaslouží být zachovány.
                </p>
            {/snippet}
            {#snippet en()}
                <p>
                    We are a project of the <em>Herní historie</em> (Game History) association, aimed at preserving gaming culture within the Czech and Slovak Republic. Our main activities are cataloging, archiving, and digitizing artifacts connected to gaming history – whether it's the games themselves, media such as magazines, period hardware, or other related historical artifacts. We believe that gaming history is not just about famous games and major developers, but that this history belongs to all of us, and that even small projects, forgotten experiments, and seemingly marginal games deserve to be preserved.
                </p>
            {/snippet}
        </Loc>
    </p>
</article>

<article class="thin">
    <h2>
        <Loc
            cs="Mise a cíle"
            en="Missions and goals"
        />
    </h2>
    <Loc>
        {#snippet cs()}
            <p>
                Ačkoliv se interaktivní zábava stala zásadní součástí kulturního života téměř poloviny z nás, stále jde o poměrně mladý obor. Navzdory své kulturní relevanci se proto videohrám nedostává stejné péče jako jiným oblastem kultury, například filmu, literatuře nebo výtvarnému umění.
            </p>
            
            <p>
                Potřeba archivace herní historie přitom není dána jen její kulturní hodnotou, ale také technologickou povahou tohoto média. Digitální data nejsou trvalá. Optické i pevné disky, diskety, audiokazety a další média postupně degradují a mohou přicházet o uložená data. U specializovaných zálohovacích technologií, jako jsou například datové kazety, se navíc postupně vytrácí podpora hardwaru, který je dokáže přečíst. A i v případech, kdy se digitální nosič zachová, může být obnovení dat ze zastaralých formátů technicky velmi náročné.
            </p>
            <p>
                Dějiny her však přesahují samotné médium videoher. Proto je důležité nejen archivovat a zálohovat samotné hry, ale také digitalizovat časopisy, herní literaturu a vizuální materiály, zaznamenávat rozhovory s autory a dalšími pamětníky nebo schraňovat vývojářské materiály.
            </p>
            <p>
                Stejně důležité je také herní historii a snahu o její zachování aktivně popularizovat, navazovat kontakty s podobnými organizacemi a vytvářet podmínky, které usnadní archivaci i navazujícím snahám. Do budoucna bude potřeba, aby vznikla oficiální instituce, která by systematicky zastřešovala naši kulturní stopu v oblasti herní kultury. Jak bude vypadat je otázkou, ale do té doby se budeme snažit prošlapat jí cestu.
            </p>
            <p>
                Z tohoto důvodu se snažíme již dnes historická data shromažďovat, systematicky digitalizovat a vytvářet jejich nové archivní kopie. Nejde nám pouze o to, aby šlo zarchivované hry hrát teď a tady, ale aby si je mohly užívat i budoucí generace. 
            </p>

        {/snippet}
        {#snippet en()}
            <p>
                Although interactive entertainment has become a fundamental part of the cultural life of almost half of us, it is still a relatively young field. Despite their cultural relevance, video games do not receive the same care as other areas of culture, such as film, literature, or visual arts.
            </p>
            <p>
                The need to archive gaming history is driven not only by its cultural value, but also by the technological nature of this medium. Digital data is not permanent. Optical disks, hard drives, floppy disks, audio cassettes, and other media gradually degrade and may lose their stored data. For specialized backup technologies, such as data tapes, hardware support for reading them is gradually disappearing. And even when a digital medium is preserved, recovering data from outdated formats can be technically very challenging.
            </p>
            <p>
                The history of games extends beyond the medium of video games itself. Therefore, it is important not only to archive and back up the games themselves, but also to digitize magazines, gaming literature, and visual materials, record interviews with authors and other witnesses, and collect developer materials.
            </p>
            <p>
                Equally important is to actively popularize gaming history and the effort to preserve it, build contacts with similar organizations, and create conditions that facilitate archiving and follow-up efforts. In the future, an official institution will need to be established to systematically oversee our cultural footprint in the field of game culture. What it will look like is an open question, but until then, we will try to pave the way for it.
            </p>
            <p>
                For this reason, we are already working to collect historical data, systematically digitize it, and create new archival copies. Our goal is not only to make archived games playable here and now, but to ensure that future generations can enjoy them too.
            </p>
        {/snippet}
    </Loc>

    <img src="/photos/elektronika.jpg" alt={loc({cs: "Fotka časopisů Elektronika", en: "Photo of Elektronika magazines"})} />
</article>

<article class="thin">
    <h2>
        <Loc
            cs="Spolupracující instituce a projekty"
            en="Collaborating institutions and projects"
        />
    </h2>

    <Loc>
        {#snippet cs()}
            <p>
                Vnímáme jako důležité budovat kontakty a sdílet znalosti a metody s organizacemi, které mají podobné cíle jako ta naše. Spolupracujeme s řadou tuzemských i mezinárodních organizací a dlouhodobě usilujeme o to, aby i u nás vznikla oficiální instituce, která bude systematicky zastřešovat a uchovávat lokální stopu tohoto významného kulturního odvětví.
            </p>
        {/snippet}
        {#snippet en()}
            <p>
                We consider it important to build contacts and share knowledge and methods with organizations that have similar goals to ours. We collaborate with numerous domestic and international organizations and continuously strive to establish an official institution that would systematically oversee and preserve the local footprint of this significant cultural sector.
            </p>
        {/snippet}
    </Loc>

    <div class="logos">
        {#each partners as partner}
            <LogoBlock entity={partner} />
        {/each}
    </div>
</article>

<article class="thin qa">
    <h2>
        <Loc
            cs="Q&A"
            en="Q&A"
        />
    </h2>

    <Loc>
        {#snippet cs()}
            <H4Anchor text="Mám materiály týkající se her – mohu vám je věnovat?" />
            <p>
                Ano! Ačkoliv nemáme kapacitu přijímat všechny materiály týkající se her tak nás můžete zkusit kontaktovat na email <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a>, jestli bychom o obsah vaší sbírky neměli zájem.
            </p>
        {/snippet}
        {#snippet en()}
            <H4Anchor text="I have materials related to games – can I donate them to you?" />
            <p>
                Yes! Although we don't have the capacity to accept all game-related materials, you can try contacting us at <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a> to see if we would be interested in the contents of your collection.
            </p>
        {/snippet}
    </Loc>
    <Loc>
        {#snippet cs()}
            <H4Anchor text="Mohu navštívit váš fyzický archiv?" />
            <p>
                V současnosti je naše fyzická sbírka přístupná pouze pro badatele. Pokud máte zájem o návštěvu archivu za badatelským účelem, kontaktujte nás na <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a>.
            </p>
        {/snippet}
        {#snippet en()}
            <H4Anchor text="Can I visit your physical archive?" />
            <p>
                Currently, our physical collection is only accessible to researchers. If you are interested in visiting the archive for research purposes, please contact us at <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a>.
            </p>
        {/snippet}
    </Loc>
    <Loc>
        {#snippet cs()}
            <H4Anchor text="Mohu vás nějak podpořit?" />
            <p>
                Můžete nás podpořit například odběrem na <a href="https://herohero.co/hernihistorie">HeroHero</a> nebo příspěvkem na <a href={localizeHref('/support')}>náš transparentní účet</a>. Podporovatelé na HeroHero navíc získávají předčasný přístup k některému obsahu, který pro ostatní zveřejňujeme o několik týdnů později. A ačkoliv díky tomu nedostanete předběžný přístup k našemu obsahu, tak budeme moc rádi i když si nastavíte pravidelné příspěvky na náš účet. Jakákoliv pravidelná podpora, i když jde jen o drobné částky, nám totiž pomáhá s dlouhodobým plánováním našeho rozpočtu a investic. 
            </p>
        {/snippet}
        {#snippet en()}
            <H4Anchor text="Can I support you somehow?" />
            <p>
                You can support us, for example, by subscribing on <a href="https://herohero.co/hernihistorie">HeroHero</a> or by contributing to <a href={localizeHref('/support')}>our transparent bank account</a>. HeroHero supporters also get early access to some content that we publish to others a few weeks later. And although it won't give you early access to our content, we would also be very happy if you set up regular contributions to our account. Any regular support, even small amounts, helps us with long-term budget and investment planning.
            </p>
        {/snippet}
    </Loc>
    <Loc>
        {#snippet cs()}
            <H4Anchor text="Jak se můžu zapojit?" />
            <p>
                Pomoci nám může kdokoliv – dobrovolnická činnost u nás nevyžaduje žádné speciální schopnosti ani znalosti, ale jen chuť se učit nové věci a zapojit se. Dobrovolníci nám pomáhají s celou řadou věcí, například inventarizací a údržbou sbírky, digitalizací herních materiálů, vývojem softwaru, opravou historického hardwaru, přepisem rozhovorů, překladem našich materiálů, pomáhají nám s PR, komunikací nebo administrativou. Tohle ale zdaleka není všechno – jsme otevření i vašim nápadům a tomu, co by vás konkrétně bavilo.
            </p>
            <p>
                Chcete se k nám připojit? Kontaktujte nás na <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a> nebo se připojte na náš <a href="https://discord.gg/9cJsyrqg">Discord</a>.
            </p>
        {/snippet}
        {#snippet en()}
            <H4Anchor text="How can I get involved?" />
            <p>
                Anyone can help – volunteering with us doesn't require any special skills or knowledge, just a willingness to learn new things and get involved. Volunteers help us with a wide range of tasks, such as inventorying and maintaining the collection, digitizing gaming materials, software development, repairing historical hardware, transcribing interviews, translating our materials, and helping with PR, communications, or administration. But this is far from everything – we are also open to your ideas and what specifically interests you.  Although most of the materials we work with are in the Czech and Slovak languages, we welcome and accomodate members who speak with us in English.
            </p>
            <p>
                Want to join us? Contact us at <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a> or join our <a href="https://discord.gg/9cJsyrqg">Discord</a>.
            </p>
        {/snippet}
    </Loc>
    <Loc>
        {#snippet cs()}
            <H4Anchor text="Mohu k vám na stáž nebo praxi?" />
            <p>
                Určitě! Oceníme pomoc každého šikovného stážisty nebo stážistky. Pokud máte zájem o stáž či praxi v našem spolku tak nás kontaktujte na <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a>.
            </p>
        {/snippet}
        {#snippet en()}
            <H4Anchor text="Can I do an internship or work placement with you?" />
            <p>
                Absolutely! We appreciate the help of every capable intern. If you are interested in an internship or work placement with our association, please contact us at <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a>.
            </p>
        {/snippet}
    </Loc>
    <Loc>
        {#snippet cs()}
            <H4Anchor text="Kde vás mohu sledovat?" />
            <p>
                Hned na několika místech – máme vlastní <a href="https://www.facebook.com/RetroHerna">Facebook</a>, <a href="https://www.instagram.com/herni.historie/">Instagram</a>, <a href="https://bsky.app/profile/hernihistorie.cz">Bluesky</a>, <a href="https://www.linkedin.com/company/herni-historie">LinkedIn</a>, <a href="https://www.youtube.com/@hernihistorie2018">YouTube</a> a <a href="https://www.tiktok.com/@herni.historie.cz">TikTok</a>. Všude zpravidla týdně postujeme co se nového děje ve spolku. Také máme <a href={localizeHref('/blog')}>vlastní blog</a> nebo se můžete připojit na náš <a href="https://discord.gg/9cJsyrqg">Discord</a>.
            </p>
        {/snippet}
        {#snippet en()}
            <H4Anchor text="Where can I follow you?" />
            <p>
                In many places – we have our own <a href="https://www.facebook.com/RetroHerna">Facebook</a>, <a href="https://www.instagram.com/herni.historie/">Instagram</a>, <a href="https://bsky.app/profile/hernihistorie.cz">Bluesky</a>, <a href="https://www.linkedin.com/company/herni-historie">LinkedIn</a>, <a href="https://www.youtube.com/@hernihistorie2018">YouTube</a>, and <a href="https://www.tiktok.com/@herni.historie.cz">TikTok</a>. We generally post weekly updates about what's happening in the association. We also have <a href={localizeHref('/blog')}>our own blog</a>, or you can join our <a href="https://discord.gg/9cJsyrqg">Discord</a>.
            </p>
        {/snippet}
    </Loc>
    <Loc>
        {#snippet cs()}
            <H4Anchor text="Ve vaší databázi časopisů chybí skeny nebo záznamy. Proč?" />
            <p>
                Digitalizace časopisů je dlouhý proces, proto skeny přidáváme postupně. Často také nemůžeme naskenovat vše, protože nám některá čísla časopisů chybí. Pokud v naší databázi naleznete nějaký časopis, ke kterému nám chybí sken či záznam a který byste nám chtěli věnovat, tak budeme rádi když se nám ozvete na <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a>.
            </p>
        {/snippet}
        {#snippet en()}
            <H4Anchor text="Your magazine database is missing scans or records. Why?" />
            <p>
                Digitizing magazines is a long process, so we add scans gradually. We also often cannot scan everything because we are missing some magazine issues. If you find a magazine in our database for which we are missing a scan or record and you would like to donate it, we would be happy to hear from you at <a href="mailto:info@herniarchiv.cz">info@herniarchiv.cz</a>.
            </p>
        {/snippet}
    </Loc>
    <Loc>
        {#snippet cs()}
            <H4Anchor text="Mám i jiné otázky. Kde vás mohu kontaktovat?" />
            <p>
                <a href={localizeHref('/contact')}>Kontaktní informace naleznete zde.</a>
            </p>
        {/snippet}
        {#snippet en()}
            <H4Anchor text="I have other questions. Where can I contact you?" />
            <p>
                <a href={localizeHref('/contact')}>You can find our contact information here.</a>
            </p>
        {/snippet}
    </Loc>

    <img src="/photos/diskety.jpg" alt={loc({cs: "Fotka disket", en: "Photo of floppy disks"})} />
</article>

<style>
    .logos {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5em;
        justify-content: flex-start;
        flex-grow: 0;
        margin: auto;
    }
    

    .qa :global(h4) {
        margin-bottom: 0;

        border-bottom: 2px solid var(--color-secondary);
    }
    .qa p {
        margin-left: 2em;
        margin-top: 0.2em;
    }
</style>