<script>
	var facts = [
		[8, "Členů spolku"],
		[6, "Let snahy"],
		[50, "Let historie"],
		[2700, "Tiskovin a příloh"],
		[120, "Místních her"],
		[1.2, "Terabytů dat"],
	]
</script>

<div class="hero">
    <div class="left">
        <h1>
            Česko&shy;slovenský<br>
            herní archiv
        </h1>
        <p>
            Herní archiv je iniciativou neziskového spolku Herní historie, jehož cílem je centralizovat materiály okolo her pod jednu střechu.
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
                        {fact[1]}
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