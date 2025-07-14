<script>
    import ProjectCard from "./ProjectCard.svelte";
    const projects = [
        { 
            title: 'Das große Testprojekt',
            image: '/images/preview/project1.jpg',
            slug: 'project-1'
        },

         { 
            title: 'Das große Testprojekt',
            image: '/images/preview/project2.jpg',
            slug: 'project-2'
        },

        
    ]
</script>

{#each projects as project}
    <ProjectCard 
        title={project.title}
        image={project.image}
        slug={project.slug}
    />
{/each}


