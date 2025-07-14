<script>
    import '../../app.css'
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    let { children } = $props();
</script>
<main class="layout-grid">
    <Header />
    {@render children()}
    <Footer/>
</main>

<style>
    .layout-grid {
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto; 
    }
</style>

