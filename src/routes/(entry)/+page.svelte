<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div id="entry-container">
    <div id="entry-header-container">
        <Header />
    </div>
    <Footer />
</div>

<style>
    #entry-container {
        display: flex;
        margin: auto;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
    }

    #entry-header-container {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
    }


</style>