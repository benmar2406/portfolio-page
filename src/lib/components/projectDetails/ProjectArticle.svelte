<script>
let { title, content  } = $props();
</script>

<article class="project-description">
    <h2>{title}</h2>
    <div>{@html content}</div>
</article>
<style>
    h2 {
        font-size: 1.8rem;
    }

    .project-description {
        max-width: 750px;
        margin: auto;
        padding: 10px 20px;
        margin-bottom: 4rem;
        border: 3px solid var(--white);
    }
    
</style>