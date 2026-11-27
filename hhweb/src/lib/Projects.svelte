<div class="projects-container">
    <div class="projects">
        <a class="proj-retroherna" href="https://retroherna.org/">
            <div>
                <img src="/img/logo-retroherna-text-white.png" alt="RetroHerna" />
            </div>
        </a>
        <a class="proj-herniarchiv" href="https://herniarchiv.cz/">
            <div>
                <img src="/img/logo-herniarchiv.svg" alt="Herní archiv" />
            </div>
        </a>
    </div>
</div>

<style>
    .projects-container {
        overflow-x: hidden;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
    }
    .projects {
        display: flex;
        justify-content: space-around;
        overflow-x: hidden;
        width: 125%;
        margin-left: -12.5%;
    }

    .projects > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        color: white;
        text-decoration: none;
        position: relative;
        height: 200px;
        padding-top: 32px;
        padding-bottom: 16px;
        z-index: 2;
        transition: all 0.3s ease-in-out;
    }

    .projects > a::before {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        transform: skewX(-11deg);
        content: "";
        z-index: 0;
    }

    .proj-retroherna::before {
        background-color: #1b2441;
    }
    .proj-herniarchiv::before {
        background-color: #f3f2e7;
    }

    .projects > a > div {
        display: flex;
        flex-direction: column;
        z-index: 2;
        text-align: center;
        align-items: center;
        transition: all 0.3s ease-in-out;
    }

    .proj-retroherna > div {
        margin-left: 40%;
        font-size: larger;
    }
    .proj-retroherna img {
        width: 175px;
        margin-bottom: 4px;
    }

    .proj-herniarchiv > div {
        margin-right: 20%;
        color: black;
    }
    .proj-herniarchiv img {
        width: 400px;
    }

    @media screen and (max-width: 880px) {
        .proj-herniarchiv img {
            width: 300px;
        }
    }

    @media screen and (min-width: 700px) {
        .projects > a:hover {
            width: 110%;
        }

        .projects > a:hover > div {
            margin-top: -12px;
        }
    }

    @media screen and (max-width: 700px) {
        .projects-container {
            overflow: hidden;
            height: 400px;
        }

        .projects {
            flex-direction: column;
            width: 100%;
            margin: 0;
            margin-top: -125px;
            overflow: hidden;
        }

        .projects > a {
            height: 300px;
        }
        .projects > a::before {
            transform: skewY(-12deg);
        }

        .proj-retroherna img {
            width: 125px;
        }
        .proj-retroherna > div {
            margin-left: 0;
            margin-right: 25%;
            margin-top: 128px;
        }
        .proj-herniarchiv img {
            width: 265px;
        }
        .proj-herniarchiv > div {
            margin-right: 0;
            margin-left: 25%;
            margin-bottom: 160px;
        }

        .projects > a:hover > div {
            transform: scale(1.1);
        }
    }

    @media screen and (max-width: 400px) {
        .proj-herniarchiv img {
            width: 200px;
        }
    }
</style>
