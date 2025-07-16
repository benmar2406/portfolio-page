<header class="index-navigation-box">
    <h1 id="title">Benedikt Martini | Informationsdesign</h1>
    <nav class="navigation-bar">
        <a class="nav-link" href="/projects">Projekte</a>
        <a class="nav-link" id="skills-nav" href="/about">About</a>
        <a class="nav-link" href="/contact">Kontakt</a>
    </nav>
</header>   

<style>
    #title {
        font-size: 1.5rem;
        text-align: center;
        margin: 2rem;
    }

    .navigation-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 4rem;
        z-index: 5;
        }

    .fixed-navigation-bar {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 90%;
        position: fixed;
        top: 0;
        left: 50%;
        height: 70px;
        z-index: 1;
        background-color: var(--background);
        transform: translateX(-50%);
        z-index: 6;
    }


        @media screen and (min-width: 800px) {
            .navigation-bar {
                justify-content: space-evenly;
            }
        }

</style>