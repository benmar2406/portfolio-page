<script>
    let { image, text, altText } = $props();    
</script>

<div class="image-text-container">
    <div class="image-container-left">
        <img alt={altText} src={image}>
    </div>
    <article class="text-right">
        {@html text}
    </article>
</div>

<style>

    .image-text-container {
        margin: 4rem 0;
        min-height: fit-content;
    }

    .image-container-left {
        margin: auto;
        width: fit-content;
    }

    .image-container-left img {
        object-fit: contain;
        width: 300px;
        margin-bottom: 2rem;
    }

    .text-right {
        top: 50%;
        background-color: var(--background);
    }

    @media screen and (min-width: 1000px) {
        .image-text-container {
            display: flex;
            flex-direction: row;
            grid-column: 1 / 13;
            width: 100%;
            position: static;
            min-height: fit-content;
        }

        .text-right {
            margin-left: 2rem;
            margin-right: 0;
            width: 100%;
            flex-basis: 100%;
            border: none;
            align-self: center;
            position: static;
        }

         .image-container-left img {
            width: 340px;
        }
}
</style>