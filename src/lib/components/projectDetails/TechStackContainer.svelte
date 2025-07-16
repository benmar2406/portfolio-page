<script>
    let { stackitems } = $props();
</script>

<div class="stack-container">
    {#each stackitems as stackitem}
        <div class="stack-item">
            <span>{stackitem}</span>
        </div>
    {/each}
</div>

<style>
    .stack-container {
        padding: 1.3rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin: 2rem auto;
        justify-content: center;
    }

    .stack-item {
        font-size:  0.7rem;
        background-color: var(--white);
        color: var(--background);
        padding: 0.4rem 0.6rem;
        border-radius: 0.4rem;
    }

    @media screen and (min-width: 600px) {
       .stack-container {
            max-width: 600px;
    }
}
</style>