<script>
	let { children } = $props();
</script>

<section class="project-page-layout">
	{@render children()}
</section>

<style>
@media screen and  (min-width: 1000px) {
	.project-page-layout {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		margin: auto;
		gap: 1rem;
		padding: 1rem;
	}
}

</style>
