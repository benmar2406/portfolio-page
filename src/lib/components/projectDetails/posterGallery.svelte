<script>
    let { posters } = $props();
</script>

<div class="carousel-container">

    {#each posters as poster}
        <img 
            class="poster" 
            src={poster}
        >
    {/each}

</div>