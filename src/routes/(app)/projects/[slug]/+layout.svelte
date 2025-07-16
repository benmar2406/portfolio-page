<script>
	let { children } = $props();
</script>

<section class="project-page-layout">
	{@render children()}
</section>

<style>
@media screen and (min-width: 1000px) {
	.project-page-layout {
		margin: auto;
	}
}

</style>
