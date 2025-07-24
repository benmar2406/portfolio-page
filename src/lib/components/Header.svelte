<script>
    import { onMount } from "svelte";
    import { page } from '$app/stores'; 
    import typewriter from "../../utils/typewriterTransition";
    import { fade } from "svelte/transition";
    import { useVisibilityObserver } from "../../utils/useVisibilityObserver.svelte";
	import { render } from "svelte/server";

    let elementToObserve = $state(null);
    let observer = $state(null);
    let renderTimeout = 4000;

    let renderNav = $state(false);
    let base = $derived($page.url.pathname === "/" ? true : false) //animate only when page is base, also add fixed navigation when page is not base
    
    let titleHeight = $state(false);
    let scrollY = $state(0);

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
    
</script>

<svelte:window bind:scrollY={scrollY} />

<header class="index-navigation-box" bind:this={elementToObserve}>
    {#if (observer && observer.isVisible) || !base}
        <h1 
            transition:typewriter 
            id="title"
            bind:clientHeight={titleHeight}
            >Benedikt Martini | Informationsdesign
        </h1>
    {/if}
    <nav 
        class="navigation-bar"
        class:fixed={scrollY >= titleHeight && !base} 
    >
        {#each navButtons as button, index}
            {#if renderNav || !base}
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
        z-index: 1000;
        min-width: 300px;
        width: 100%;
        height: 4rem;
        justify-content: space-evenly;
    }

    .fixed {
        position: fixed;
        top: 0;
        left: 50%;
        background-color: var(--background);
        transform: translateX(-50%);
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