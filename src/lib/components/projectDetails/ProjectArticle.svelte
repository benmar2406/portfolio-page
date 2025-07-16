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
        margin: 4rem 0;
        max-width: 750px;
        margin-bottom: 4rem;
        align-self: start;
    }
    
</style>