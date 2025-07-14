<script>
    import { onMount } from "svelte";
    import ProjectCard from "./ProjectCard.svelte";

    let { loadedProjects } = $props();
</script>


<div class="project-gallery">
{#if loadedProjects}
{#each loadedProjects as project}
    <ProjectCard 
        title={project.title}
        image={project.image}
        slug={project.slug}
    />
{/each}
{/if }
</div>


<style>
.project-gallery {
    display: grid;
    gap: 3em;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: auto;
    margin: 4rem auto; 
    width: 90%;  
}

@media screen and (min-width: 1230px) {
    .project-gallery {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        width: 88%;
    }
}

</style>


