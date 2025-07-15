<script>
    import { onMount } from "svelte";
    let { videos } = $props();
    let selectedVideo = $state(videos[0][1]);
    $inspect(videos[0][1]);
    let videoElement = $state();


    const handleVideoSelect = (index) => {
        selectedVideo = videos[index][1];
        videoElement.autoplay = true;

    } 

</script>


<div class="video-player">
    <video 
        bind:this={videoElement}
        class="video" 
        src={selectedVideo}
        controls
        >Dies Video kann in Ihrem Browser nicht wiedergegeben werden.
            <track kind="captions">
        </video>
        <ul class="playlist">
        {#each videos as video, index}
            <li>
                <button 
                    aria-label="playlist-button" 
                    class="playlist-button"
                    onclick={() => handleVideoSelect(index)}

                    >{video[0]}
                
                </button>
            </li>
            
        {/each}
        </ul>
</div>


<style>
    .video-player {
        grid-column: 2 / 12;
        height: fit-content;
    }

    .video {
        width: 100%;
    }

    .playlist {
        border: solid 0.2rem var(--white);
        padding: 0;
        padding-left: 0; 
        margin-top: 0.5rem;
    }

    .playlist li {
        list-style-type: none;
        margin: 0.1rem;
    }

    .playlist-button {
        padding: 0.6rem; /* Set left and right padding to 0 */
        margin: 0.2rem;
        border: solid 0.02rem var(--white);
        width: 100%;
        text-align: left;
        background-color: transparent;
        color: var(--white);
        transition: all ease 0.6s;

    }

    .playlist-button:hover {
        background-color: var(--accentOpaque);
        font-size: 0.87rem;
    }



    

</style>