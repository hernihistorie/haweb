<script lang="ts">
	import Meta from "$lib/Meta.svelte";
    import { DONATE_LINKS } from "$src/constants";
    import { writable } from 'svelte/store';

    import spayd from 'spayd';
    import qrcode from 'qrcode';
	import PriceButton from "./PriceButton.svelte";

    const qrCodeOptions = {
        width: 800,
        color: {light: '#f3f2e7'},
    };

    const DEFAULT_AMOUNT = '100';
    const amount = writable(DEFAULT_AMOUNT);
    let customValueActive = false;
    let qrCodeUrl: string;

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
        })

        console.log('foo');
        if (typeof document !== 'undefined') {
            console.log('bar');
            const elCustomValue = document.getElementById('customValue');
            console.log(elCustomValue.value, value)
            if (elCustomValue && elCustomValue.value == value) {
                customValueActive = true;
            } else {
                customValueActive = false;
            }
        }
    })

    function clickCustomValue(ev: Event) {
        const el = ev.target as HTMLInputElement;
        el.value = "";
    }
    
    function inputCustomValue(ev: Event) {
        const el = ev.target as HTMLInputElement;
        if (el && el.value) {
            if (parseInt(el.value) > 99000) {
                el.value = "99000";
            }
            amount.set(el.value)

            document.getElementById('currency').style.visibility = 'visible';
            document.getElementById('currency').style.left = (el.value.length - 15) + "ch";
        }
    }
</script>

<Meta title="Podpořte nás" />

<article class="thin">
    <h2>Podpořte nás</h2>
    <p>
        Finančně nás můžete podpořit na následujících místech:
    </p>

    <dl>
        {#each Object.entries(DONATE_LINKS) as [name, url]}
            <dt>
                { name }
            </dt>
            <dd>
                <a href={ url }>{ url }</a>
            </dd>
        {/each}
    </dl>

    <h3>Příspěvek na otevřený účet</h3>
    <p>
        Zvolte si částku, kterou nás chcete podpořit:
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
                on:click={clickCustomValue}
                on:input={inputCustomValue}
                style="width: 7.5em;"

                class={customValueActive ? "active" : ""}
            >
            <div
                class="currency {customValueActive ? "active" : ""}"
                id="currency"
            >
                Kč
            </div>
        </div>
    </div>

    <div class = "qrcontainer">
        <img src={ qrCodeUrl } alt="QR kód" class="qrcode">
        <img src="/ico/logo_herni_archiv.svg" alt="Logo Herního archivu" class="qrlogo">
    </div>
</article>

<style>
    .qrcontainer {
        position: relative;
        display: flex;
        justify-content: center;
    }
    
    .qrcode {
        width: 400px;
        height: 400px;
    }

    .qrlogo {
        width: 78px; height: 96px; object-fit: cover; object-position: 0 0;
        position: absolute;
        top: calc(50% - 58px);
        left: calc(50% - 49px);
        z-index: 1;
        background: var(--color-bg);
        padding: 9px 7.5px 11.4px 12.5px;
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
    }

    .currency.active {
        color: white;
    }
</style>