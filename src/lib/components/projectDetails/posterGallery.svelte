<script>
    import { fade } from "svelte/transition";
    let { posters } = $props();
    let selectedIndex = $state(0);

    const handlePosterSelect = (index) => {
        selectedIndex = index;
    }

    $inspect(posters[selectedIndex][0])

</script>

<!---->
<div class="carousel-container">
<img 
    src={posters[selectedIndex][0]} 
    alt={posters[selectedIndex][1]}
    class="selected-poster">
<div class="carousel">
    {#if posters.length > 1}
    {#each posters as poster, index}
        <div 
            class="image-container"
            class:active={selectedIndex === index} 
            onclick={() => handlePosterSelect(index)}
            onKeydown={() => handlePosterSelect(index)}
            
        >
            <img 
                class="poster" 
                src={poster[0]}
                alt={poster[1]}
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
        margin: 4rem auto;
    }

    .selected-poster{
        border-radius: 3rem;
        max-width:100%;
        height: 85vh;
        margin: auto;
        display: block;
    }

    .carousel {
        width: 100%;
        display: flex;
        gap: 0.7rem;
        justify-content: center;
        margin: 1rem auto;
        overflow: hidden;
        height: 5rem;
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
