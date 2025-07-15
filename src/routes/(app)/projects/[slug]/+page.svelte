<script>
	/*
  import StandardLayout from '$lib/layouts/StandardLayout.svelte';
  import Carousel from '$lib/components/Carousel.svelte';
  import TechStack from '$lib/components/TechStack.svelte';
  */
 import ProjectArticle from "$lib/components/projectDetails/ProjectArticle.svelte";
 import VideoPlayer from "$lib/components/projectDetails/VideoPlayer.svelte";

	let { data } = $props();
	let loadedProject = $derived(data.project);

</script>
{#if loadedProject}
	{#each loadedProject.components as comp}
		{#if comp === 'article'} 
			<ProjectArticle 
				title={loadedProject.article.title} 
				content={loadedProject.article.content} 
			/>
		{/if}
		{#if comp === 'videoGallery'}
			<VideoPlayer 
				videos={loadedProject.data.videos} 
			/>
		{/if}
	{/each}

<!---
	  {#if comp === 'article'} <ProjectArticle /> {/if}
      {#if comp === 'carousel'} <Carousel /> {/if}
      {#if comp === 'techStack'} <TechStack stack={loadedProject.data.stack} /> {/if}
-->
{/if}
