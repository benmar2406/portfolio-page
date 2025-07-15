<script>
	import ProjectArticle from "$lib/components/projectDetails/ProjectArticle.svelte";
	import VideoPlayer from "$lib/components/projectDetails/VideoPlayer.svelte";
	import ImageAndtext from "$lib/components/projectDetails/ImageAndtext.svelte";
	import PosterGallery from "$lib/components/projectDetails/posterGallery.svelte";

	let { data } = $props();
	let loadedProject = $derived(data.project);
	$inspect(loadedProject.data.posterUrls)

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
		{#if comp === 'imgLeftTextRight'}
			<ImageAndtext 
				image={loadedProject.data.imgLeftTextRight.img} 
				text={loadedProject.data.imgLeftTextRight.text}
				altText={loadedProject.data.imgLeftTextRight.altText}
			/>
		{/if}
		{#if comp === 'posterGallery'}
			<PosterGallery 
				posters={loadedProject.data.posterUrls} 
			/>
		{/if}
	{/each}
{/if}
