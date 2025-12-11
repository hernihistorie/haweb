<script lang="ts">
	import Meta from "$lib/Meta.svelte";
    import { DONATE_LINKS } from "$src/constants";
    import { writable } from 'svelte/store';

    import spayd from 'spayd';
    import qrcode from 'qrcode';
	import PriceButton from "./PriceButton.svelte";
	import Loc from "$src/lib/Loc.svelte";

    const qrCodeOptions = {
        width: 1200,
        color: {light: '#f3f2e7'},
    };

    const DEFAULT_AMOUNT = '100';
    const amount = writable(DEFAULT_AMOUNT);
    let customValueActive = $state(false);
    let qrCodeUrl: string = $state();

    let payment = {
        acc: 'CZ6406000000008686868686',
        am: DEFAULT_AMOUNT,
        cc: 'CZK',
        msg: 'Příspěvek na záchranu videoher',
        xvs: '10'
    }

    amount.subscribe(value => {
        payment.am = value;

        qrcode.toDataURL(spayd(payment), qrCodeOptions).then(url => {
            qrCodeUrl = url;
        }).catch(err => {
            console.error(err);
        })


        if (typeof document !== 'undefined') {
            const elCustomValue = document.getElementById('customValue');
            customValueActive = elCustomValue && elCustomValue.value == value;
        }
    })

    function clickCustomValue(ev: Event) {
        const el = ev.target as HTMLInputElement;
        if (el.value == 'Vlastní hodnota' || el.value == '') {
            el.value = "";

            document.getElementById('currency').style.visibility = 'visible';
            document.getElementById('currency').style.left = (1 - 15) + "ch";
        } else {
            inputValueSet(el);
        }
    }

    function inputValueSet(el: HTMLInputElement) {
        // remove non-numeric characters
        el.value = el.value.replace(/[^0-9]/g, '');
        if (parseInt(el.value) > 99000) {
            el.value = "99000";
        }
        if (el.value != '') {
            amount.set(el.value)

            document.getElementById('currency').style.visibility = 'visible';
            document.getElementById('currency').style.left = (el.value.length - 15) + "ch";
        }
    }
    
    function inputCustomValue(ev: Event) {
        const el = ev.target as HTMLInputElement;
        if (el && el.value) {
            inputValueSet(el);
        }
    }
</script>

<Meta title={{cs: "Podpořte nás", en: "Support us"}} />

<article class="thin">
    <h2>
        <Loc
            cs="Podpořte nás"
            en="Support us"
        />
    </h2>
    <p>
        <Loc
            cs="Finančně nás můžete podpořit na následujících místech:"
            en="You can financially support us at the following places:"
        />
    </p>

    <dl>
        {#each Object.entries(DONATE_LINKS) as [name, url]}
            <dt>
                { name }
            </dt>
            <dd>
                <a href={ url }>{ url.replace("https://", "") }</a>
            </dd>
        {/each}
    </dl>

    <h3>
        <Loc
            cs="Příspěvek na otevřený účet"
            en="Contribution to our transparent bank account"
        />
    </h3>
    <p>
        <Loc
            cs="Zvolte si částku, kterou nás chcete podpořit, a oskenujte kód zapomocí Vaší bankovní aplikace."
            en="If you have a Czech bank account, you can choose the amount you want to support us with and simply scan the code using your banking app."
        />
    </p>
    <div style="text-align: center; display: flex; justify-content: center; flex-wrap: wrap;">
        <PriceButton value="100" {amount} />
        <PriceButton value="300" {amount} />
        <PriceButton value="600" {amount} />
        <PriceButton value="1000" {amount} />
        <div style="display: flex;">
            <input
                id="customValue"
                type="text"
                pattern="[0-9]*"
                inputmode="numeric"
                value="Vlastní hodnota"
                onclick={clickCustomValue}
                onfocus={clickCustomValue}
                oninput={inputCustomValue}
                style="width: 7.5em;"

                class="customvalue {customValueActive ? "active" : ""}"
            >
            <div
                class="currency {customValueActive ? "active" : ""}"
                id="currency"
                onclick={() => document.getElementById('customValue')?.focus()}
            >
                Kč
            </div>
        </div>
    </div>

    <div class = "qrcontainer">
        <img src={ qrCodeUrl } alt="QR kód" class="qrcode">
        <img src="/ico/logo_herni_archiv.svg" alt="" class="qrlogo">
    </div>

    <p style="">
        <Loc
            cs="
                Případně můžete sami zaslat částku na náš transparentní účet s číslem:<br>
                <strong>8686868686/0600</strong>
            "
            en="
                Alternatively, you can send your contribution using the following SEPA bank account details:<br>
                <strong>IBAN:</strong> CZ64 0600 0000 0086 8686 8686<br>
                <strong>BIC:</strong> AGBACZPP<br>
                <strong>Recipient</strong>: Herní historie, z.s.<br>
                <strong>Address</strong>: Sportovní 1552/10a, 10100 Praha 10, Czech Republic
            "
        />
    </p>

    <p>
        <Loc
            cs="Děkujeme za vaše příspěvky, které nám pomáhají udržovat a rozšiřovat naše aktivity."
            en="Thank you for your contributions, which help us maintain and expand our activities."
        />
    </p>
</article>

<style>
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    .qrcontainer {
        position: relative;
        display: flex;
        justify-content: center;
        animation: fadeIn 2s;

        max-width: 400px;
        margin: 0 auto;
        aspect-ratio: 1 / 1;
    }
    
    .qrcode {
        width: 400px;
    }

    .qrlogo {
        width: 78px; height: 96px; object-fit: cover; object-position: 0 0;
        position: absolute;
        top: calc(50% - 58px);
        left: calc(50% - 49px);
        z-index: 1;
        background: var(--color-bg);
        padding: 9px 8px 11.4px 12.5px;
    }

    .currency {
        visibility: hidden;
        font-weight: 500;
        user-select: none;
        position: relative;
        padding: 8px 0;
        font-size: 22px;
        margin: 9px 0 8px 0;
        left: -12px;
        cursor: pointer;
        width: 0;
    }

    .currency.active {
        color: white;
    }

    @media only screen and (max-width: 450px) {
        .qrlogo {
            display: none;
        }
    }

    @media only screen and (max-width: 210px) {
        .customvalue {
            padding-left: 2px;
        }
    }
</style>