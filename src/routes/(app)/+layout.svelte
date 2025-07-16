<script>
    import '../../app.css'
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    
    let { children } = $props();
</script>
<div class="layout-grid">
    <Header />
    <main>
        {@render children()}
    </main>
    <Footer/>
</div>

<style>
    .layout-grid {
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto; 
    }
</style>

