<script>
    import { onMount } from "svelte";
    import { page } from '$app/stores'; // ← this is all you need

        
    const navButtons = [
            {url: '/projects', name: 'Projekte'},
            {url: '/about', name: 'About'},
            {url: '/contact', name: 'Kontakt'}
        ]    
    
</script>


<header class="index-navigation-box">
    <h1 id="title">Benedikt Martini | Informationsdesign</h1>
    <nav class="navigation-bar">
        {#each navButtons as button}
            <a 
                class="nav-link"
                class:active={$page.url.pathname.slice(0, -1) === button.url} 
                href={button.url}
            >{button.name}
            </a>
        {/each}
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

    .nav-link {          
        margin: 0.1rem;
        padding: 10px;
        border: 3px solid var(--white);
        width:fit-content;
        transition: all 0.3s;
    }

    .nav-link:hover, .nav-link.active {          
        background-color: var(--white);
        color: var(--accent)
    }


    @media screen and (min-width: 800px) {
        .navigation-bar {
            justify-content: space-evenly;
        }
    }

</style>