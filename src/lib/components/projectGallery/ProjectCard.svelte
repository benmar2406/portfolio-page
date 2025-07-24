<script>
    let { title, image, slug } = $props()
</script>


<div class="project-card">
    <a href="/projects/{slug}" class="project-link">
        <p class="project-title">{title}</p>
    </a>
    <img src={image} alt={title} />
</div>


<style>
    .project-card {
        display: flex;
        height: 380px;
        overflow: hidden;
        border-radius: 3rem;
        position: relative;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .project-link {
        position: absolute;
        background-color: var(--accent);
        opacity: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        cursor: pointer;
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.8s; 
        text-align: center;
    }

    .project-link:hover, .project-link:focus {
        opacity: 0.9;
    }

    .project-title {
        padding: 0.4rem;
    }


    @media screen and (min-width: 815px) {
       .project-card { 
            height: 340px 
        }
    }


    
    
</style>