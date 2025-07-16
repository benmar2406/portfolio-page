<script>
  let { images } = $props(); // images: array of [url, alt]

  const TOTAL_COLUMNS = 12;
  const maxSpan = 6;
  const minSpan = 4;

  // Assign random layout metadata (start and span)
  images = images.map((image) => {
    const span = Math.floor(Math.random() * (maxSpan - minSpan + 1)) + minSpan;
    const maxStart = TOTAL_COLUMNS - span + 1;
    const start = Math.floor(Math.random() * maxStart) + 1;
    return {
      url: image[0],
      alt: image[1],
      gridColumn: `${start} / span ${span}`
    };
  });
</script>

<div class="image-board">
  {#each images as image}
    <img 
      src={image.url} 
      alt={image.alt} 
      style={`grid-column: ${image.gridColumn}`}
    />
  {/each}
</div>

<style>
  .image-board {
    margin: 4rem auto;
    width: 100%;
  }

  img {
    width: 100%;
    margin: 1rem auto;
    max-width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }

  @media screen and (min-width: 600px) {
    .image-board {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 2rem;
    }
  }

</style>
