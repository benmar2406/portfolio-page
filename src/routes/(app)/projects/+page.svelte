<script>
    import ProjectGallery from "$lib/components/projectGallery/ProjectGallery.svelte";
    let { data } = $props();
    let loadedProjects = $derived(data.projects)
</script>

<ProjectGallery {loadedProjects} />
