<script>
	let { children } = $props();
</script>

<div class="layout">
	<main>
		{@render children()}
	</main>
</div>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: repeat(12, 1fr);
		}
	}
</style>
