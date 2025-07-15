<script>
    import { fade } from "svelte/transition";
    let { posters } = $props();
    let selectedIndex = $state(0);
    let selectedPoster = $state(posters[0]);

    const handlePosterSelect = (index) => {
        selectedIndex = index;
    }
</script>

<div class="carousel-container">
<img 
    src={posters[selectedIndex]} 
    class="selected-poster">
<div class="carousel">
    {#if posters.length > 1}
    {#each posters as poster, index}
        <div 
            class="image-container"
            class:active={selectedIndex === index} 
            onclick={() => handlePosterSelect(index)}
            
        >
            <img 
                class="poster" 
                src={poster}
                transition:fade={{duration: 2000}}
            >
        </div>
    {/each}
    {/if}
</div>
</div>

<style>
    .carousel-container {
        display: flex;
        flex-direction: column;
        margin: auto;
        display: block;
    }

    .selected-poster{
        border-radius: 3rem;
        width: 96%;
        margin: auto;
        display: block;
    }

    .carousel {
        width: 90%;
        display: flex;
        gap: 0.7rem;
        justify-content: center;
        margin: 1rem auto;
        overflow: hidden;
    }

   .image-container {
        width: 4rem;
        height: 4rem;
        overflow: hidden;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all ease-in-out 0.5s;
   }

   .image-container:hover, .image-container.active {
        width: 4.4rem;
        height: 4.4rem;
        overflow: hidden;
        border-radius: 0.5rem;
        border: solid 0.09rem var(--white)
   }

   .image-container img {
        object-fit: contain;
        width: 100%;
        height: auto;
        overflow: hidden;
   }
    

</style>
