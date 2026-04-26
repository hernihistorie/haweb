<script lang="ts">
    import PageLang from "$src/lib/components/PageLang.svelte";
    import Figure from "$src/lib/components/Figure.svelte";
	import Loc from "$src/lib/components/Loc.svelte";
	import Arrow from "$src/lib/components/Arrow.svelte";
</script>

<PageLang cs en />

<section>
    <Figure src="/photos/blog-posts/stante-se-dobrovolnikem-spolku-herni-historie/stante-se-dobrovolnikem-spolku-herni-historie.jpg"/>
    <Loc>
        {#snippet cs()}
            <p>V našem spolku už 11 let pracujeme na popularizaci a zachování tuzemské i zahraniční herní historie. Věříme, že hry jsou kulturním dědictvím na stejné úrovni jako film, literatura nebo výtvarné umění – a že si zaslouží stejnou péči. Naše činnost je z podstaty nezisková, a proto se dlouhodobě spoléháme na pomoc dobrovolníků, kteří se aktivitám spolku věnují ve svém volném čase.<br><b>A právě teď se k nám můžete připojit i vy!</b></p>
            <p><b>Musím být z Prahy?</b><br>Pokud jste z Prahy nebo okolí, je to výhoda – můžete se s námi pravidelně potkávat a zapojit se přímo do práce v prostorách archivu. Není to ale podmínka. Někteří z našich členů spolupracují i na dálku, takže se můžete zapojit odkudkoliv.</p>
            <p><b>Potřebuji technické znalosti nebo znalosti herní historie?</b><br>Vůbec ne! Stačí chuť zkoušet nové věci a zapojit se. Pomoci může kdokoliv – student, ajťák, historik, grafik, účetní… místo se najde pro každého.</p>
            <p><b>Jak se mohu zapojit?</b><br>Členové nám pomáhají s celou řadou věcí, například inventarizací a údržbou sbírky, digitalizací herních materiálů, vývojem softwaru, opravou historického hardwaru, přepisem rozhovorů, překladem našich materiálů, pomáhají nám s PR, komunikací nebo administrativou.<br>Tohle ale zdaleka není všechno – jsme otevření i vašim nápadům a tomu, co by vás konkrétně bavilo.</p>
            <p><b>Co z toho budu mít?</b></p>
            <ul>
                <li>možnost podepsat se pod archivačními projekty a jinými aktivitami spolku</li>
                <li>nové zkušenosti a dovednosti</li>
                <li>nové kontakty, kamarády a kamarádky a komunitu lidí, které baví to co vás</li>
            </ul>
            <p>Chcete se zapojit nebo máte otázky? Ozvěte se nám na <a href="mailto:info@hernihistorie.cz">info@hernihistorie.cz</a>.</p>
            <p>Budeme rádi za každého, kdo chce pomoct zachovat herní historii pro budoucí generace.</p>

            <Arrow href="mailto:info@hernihistorie.cz">Napište nám email na info@hernihistorie.cz</Arrow>
            <Arrow href="https://discord.gg/9AwRUfShX5">Přidejte se na náš Discord</Arrow>

        {/snippet}
        {#snippet en()}
            <p>
                Within our association, we've been working for 11 years to popularize and preserve both local and global game history. We believe that video games are cultural heritage on the same level as film, literature, or visual arts – and that they deserve the same care. Our activities are principally nonprofit, and that's why in the long run, we're relying on the activities of volunteers, who contribute to the group's activities in their free time.<br>
                <strong>And now's the time when you can join in too!</strong>
            </p>
            <p>
                <b>Do I have to be from Prague?</b><br>
                If you are from Prague or closeby, it's a benefit – you can meet with us regularly and take part in work in the physical archive. However, it's not a necessity. We have members who cooperate remotely, so you can participate from anywhere.
            </p>
            <p>
                <b>Do I need to be able to speak Czech?</b><br>
                Although most of the materials we work with are in the Czech and Slovak languages, we welcome and accomodate members who speak with us in English.  There is plenty of technical work to go around, as well as opportunities in collaboration with international organizations.
            </p>
            <p>
                <b>Do I need to have technical knowledge or knowledge of game history?</b><br>
                Not at all!  All you need is the will to try new things and take part. Anybody can help out - a student, an IT person, a historian, a graphics designer, an accountant...  we can find a spot for everybody.
            </p>
            <p>
                <b>How can I get involved?</b><br>
                Members help us with a wide range of things, such as inventarization and maintenance of the collection, digitalization of game materials, software development, repairs of historical hardware, interview transcriptions, translations of our materials, they help us with PR, communications, or administration.<br>
                But that's far from everything - we are also open to your ideas and what you would specifically enjoy.
                
            </p>
            <p>
                <b>What's in it for me?</b>
            </p>
            <ul>
                <li>The opportunity to put your name under archival projects and other activities of the association</li>
                <li>New experiences and skills</li>
                <li>New contacts, friends and a community of people who enjoy what you do</li>
            </ul>
            <p>Want to get involved or have questions? Get in touch at <a href="mailto:info@hernihistorie.cz">info@hernihistorie.cz</a>.</p>
            <p>We're grateful for anybody who'd like to help preserve game history for future generations.</p>

            <Arrow href="mailto:info@hernihistorie.cz">Send us an email at info@hernihistorie.cz</Arrow>
            <Arrow href="https://discord.gg/9AwRUfShX5">Join our Discord</Arrow>
        {/snippet}
        </Loc>
</section>
