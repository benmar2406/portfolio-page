<script>
    import { onMount } from "svelte";
    let { videos } = $props();
    let videoElement = $state();
    let selectedIndex = $state(0);

    const handleVideoSelect = (index) => {
        videoElement.autoplay = true;
        selectedIndex = index;
    } 

</script>


<div class="video-player">
    <ul class="playlist">
        {#each videos as video, index}
            <li>
                <button 
                    aria-label="playlist-button" 
                    class="playlist-button"
                    class:active={selectedIndex === index}                    
                    onclick={() => handleVideoSelect(index)}
                    >{video[0]}
                
                </button>
            </li>
            
        {/each}
        </ul>
    <video 
        bind:this={videoElement}
        class="video" 
        src={videos[selectedIndex][1]}
        controls
        >Dies Video kann in Ihrem Browser nicht wiedergegeben werden.
            <track kind="captions">
        </video>
</div>


<style>
    .video-player {
        height: fit-content;
        margin: 8rem auto;
    }

    .video {
        width: 100%;
    }

    .playlist {
        border: solid 0.2rem var(--white);
        padding: 0;
        padding-left: 0; 
        margin-top: 0.5rem;
        height: fit-content;
    }

    .playlist li {
        list-style-type: none;
        margin: 0.1rem;
    }

    .playlist-button {
        padding: 0.6rem; 
        margin: 0.2rem;
        border: solid 0.02rem var(--white);
        width: 100%;
        text-align: left;
        background-color: transparent;
        color: var(--white);
        transition: all ease 0.6s;
        min-height: 4rem;
        font-size: 0.8rem;
    }

    .playlist-button:hover, button.active {
        background-color: var(--accentOpaque);
        font-size: 0.85rem;
    } 
@media screen and (min-width: 900px) {
    .video-player {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 1rem;
    }

    .video {
        grid-column: 4 / 13;
    }

    .playlist {
        grid-column: 1 / 4;
    }
}

</style>