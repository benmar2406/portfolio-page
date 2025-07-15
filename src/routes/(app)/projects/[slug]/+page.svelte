<script>
	let { data } = $props();
	let loadedProject = $derived(data.project);
	$inspect(loadedProject);

</script>
<article class></article>
<h2>{loadedProject.title}</h2>
<div class="image-container">
	<img>
</div>