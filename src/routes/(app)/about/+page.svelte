<script>
    import TechStackContainer from "$lib/components/projectDetails/TechStackContainer.svelte";

    let { data } = $props();
    let about = $derived(data.about);
</script>

<div class="about-container">
    {#each about as section, index}
        <article 
            class="about-description"
            class:left-aligned={index % 2 === 0}
            >
                <h2>{section.title}</h2>
                {#if section.textContent}
                    <p>{section.content}</p>
                {:else}
                    <TechStackContainer stackitems={section.content}/>
                {/if}
        </article>  
    {/each}
</div>

<style>

    .about-description {
        margin: 2rem 0;
    }
    
    @media screen and (min-width: 750px) {
        .about-container {
            display: flex;
            flex-direction: column;
        }

        .about-description {
            width: 60%;
            align-self: end;
        }

        .about-description.left-aligned {
            align-self: start;
        }
    }
</style>


