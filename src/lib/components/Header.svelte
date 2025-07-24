<script>
    import { onMount } from "svelte";
    import { page } from '$app/stores'; 
    import typewriter from "../../utils/typewriterTransition";
    import { fade } from "svelte/transition";
    import { useVisibilityObserver } from "../../utils/useVisibilityObserver.svelte";
	import { render } from "svelte/server";

    let elementToObserve = $state(null);
    let observer = $state(null);
    let renderNav = $state(false);
    let notRenderElems = $derived($page.url.pathname != "/" ? true : false)

    let renderTimeout = 4000;
    
    const navButtons = [
            {url: '/projects', name: 'Projekte'},
            {url: '/about', name: 'About'},
            {url: '/contact', name: 'Kontakt'}
        ];

    onMount(() => {
        observer = useVisibilityObserver(elementToObserve);

        $effect(() => {
            if (observer) {
            setTimeout(() => {
                renderNav = true;
            }, renderTimeout)
        }});
    
    });

    $inspect($page.url.pathname)
    
</script>


<header class="index-navigation-box" bind:this={elementToObserve}>
    {#if (observer && observer.isVisible) || notRenderElems}
        <h1 
            transition:typewriter 
            id="title"
            >Benedikt Martini | Informationsdesign
        </h1>
    {/if}
    <nav class="navigation-bar">
            {#each navButtons as button, index}
                {#if renderNav || notRenderElems}
                <a 
                    class="nav-link"
                    class:active={$page.url.pathname.slice(0, -1) === button.url} 
                    href={button.url}
                    transition:fade={{ duration: 900, delay: 400 * index}}
                >{button.name}
                </a>
                {/if}
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
        margin: auto;
        margin-bottom: 4rem;
        z-index: 5;
        min-width: 300px;
        width: 50vw;
        height: 4rem;
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