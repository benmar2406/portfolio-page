<script>
    import ProjectGallery from "$lib/components/project-gallery/ProjectGallery.svelte";
    let { data } = $props();
    let loadedProjects = $derived(data.projects)

</script>

<ProjectGallery {loadedProjects} />
