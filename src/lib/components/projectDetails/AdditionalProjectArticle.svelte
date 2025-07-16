<script>
let { content  } = $props();
</script>

<article class="project-description">
    {@html content}
</article>
<style>

    .project-description {
        max-width: 750px;
        margin-bottom: 4rem;        
    }
    
</style>