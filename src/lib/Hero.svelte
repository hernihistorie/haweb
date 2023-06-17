<script>
    import Loc from '$lib/Loc.svelte';
	var facts = [
		[14, "Členů spolku", "Organization members"],
		[7, "Let snahy", "Years of effort"],
		[50, "Let historie", "Years of history"],
		[2800, "Tiskovin a příloh", "Printed materials"],
		[145, "Místních her", "Local games"],
		[7.5, "Terabytů dat", "Terabytes of data"],
	]
</script>

<div class="hero">
    <div class="left">
        <h1>
            <Loc cs="
                Česko&shy;slovenský<br>
                herní archiv"
                en="
                Czecho&shy;slovak<br>
                Game Archive
                "/>
        </h1>
        <p>
            <Loc
                cs="Herní archiv je iniciativou neziskového spolku Herní historie, jehož cílem je centralizovat materiály okolo her pod jednu střechu."
                en="The Czechoslovak Game Archive is an initiative of the nonprofit organization Herní historie, whose goal is to centralize materials surrounding games under a single roof."
            />
        </p>
    </div>
    <div class="right">
        <ul class="facts">
            {#each facts as fact}
                <li>
                    <div class="checkmark">
                        <img src="/ico/ico_check.svg" alt="✓">
                    </div>
                    <div class="value">
                        {fact[0]}
                    </div>
                    <div class="text">
                        <Loc
                            cs="{fact[1]}"
                            en="{fact[2]}"
                        />
                    </div>
                </li>
            {/each}
        </ul>
		<img class="fact-img" src="/illu/illu_01.png" alt="">
    </div>
</div>

<style>
    .hero {
        display: flex;
        margin-top: 128px;
        margin-bottom: 128px;
        min-height: 320px;
        justify-content: space-between;
    }
    .hero > div {
        width: calc(50% - 16px);
        position: relative;
    }

    .hero .left {
        margin: auto 0 auto 0;
    }

    h1 {
        text-transform: uppercase;
        font-size: 42px;

    }

    .hero p {
        margin-left: 50px;
        margin-right: 32px;
        font-size: 22px;
    }

    .facts {
        list-style: none;
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: var(--color-secondary);
        min-height: 260px;
    }

    .facts li {
        display: flex;
        background: var(--color-bg);
        height: 100%;
        margin-top: 1px;
        align-content: center;
    }
    
    .facts li:last-child {
        margin-bottom: 1px;
    }

    .facts li > div {
        margin: auto;
    }

    .facts li .checkmark img {
        width: 22px;
        margin: auto;
        user-select: none;
    }

    .facts li .value {
        flex-grow: 1;
        margin-left: 24px;
    }

    .facts li .text {
        flex-grow: 1;
        text-align: right;
    }

    .fact-img {
        width: 250px;
        height: 270px;
        position: absolute;
        top: calc(50% - 270px / 2);
        left: calc(50% - 250px / 2);
        user-select: none;
    }

    @media only screen and (min-width: 1000px) and (max-width: 1200px) {
        .fact-img {
            width: calc(250px / 1.5);
            height: calc(270px / 1.5);
            top: calc(50% - 270px / 2.75);
            left: calc(50% - 250px / 2.75);
        }
    }

    @media only screen and (max-width: 1000px) {
        .hero {
            flex-wrap: wrap;
        }

        .hero > div {
            width: 100%;
        }

        .hero .left {
            margin-bottom: 32px;
        }
    }

    @media only screen and (max-width: 600px) {
        .fact-img {
            width: calc(250px / 2);
            height: calc(270px / 2);
            top: calc(50% - 270px / 4);
            left: calc(50% - 250px / 4);
        }
    }



    @media only screen and (max-width: 450px) {
        .fact-img {
            top: -32px;
        }
    }

    @media only screen and (max-width: 400px) {
        .right {
            margin-top: 128px;
        }
        .fact-img {
            top: -128px;
        }
    }
</style>
