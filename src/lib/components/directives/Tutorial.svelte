<script lang='ts'>
    import {onMount} from 'svelte'
    import {base} from '$app/paths'
    import Fa from 'svelte-fa'
    import {faLink} from '@fortawesome/free-solid-svg-icons'
    import videoPlaceholder from '$lib/assets/video-placeholder.jpg'
    export let slug:string;
    export let get:boolean = true;
    export let tutorialData:any;

    let loaded:boolean = false;

    onMount(async () => {
        if(get) {
            const res = await fetch(`${base}/api/tutorials/${slug}`)
            tutorialData = await res.json()
            // console.log(tutorialData)
        }
    })

    // const triggerLoad = () => {
    //     console.log("loaded")
    //     loaded = true;
    // }

    function cleanPath(path:string) {
        return path.slice("/src/lib/content/".length, -3)
    }
</script>

<div class='tutorial card my-3'>
    <div class='card-content'>
        {#if tutorialData}
        <div class='columns'>
            <div class='column is-narrow'>
                    <iframe src={`https://www.youtube.com/embed/${tutorialData.meta.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <!-- <img src={videoPlaceholder} alt='Video placeholder image' /> -->
            </div>
            <div class='column'>
                <h3>
                    <a class='mr-1' href="{`${base}/tutorials/${cleanPath(tutorialData.path)}`}">
                        {tutorialData.meta.title}
                    </a>
                    <Fa icon={faLink} />
                </h3>
                <p>{tutorialData.meta.description}</p>
            </div>
        </div>
        
        {/if}
    </div>
</div>

<style>
    iframe {
        border-radius: 12px;
        border-width: 1px;
        background-color: grey;
    }
    a {
        color: black;
    }
    a:hover {
        text-decoration: underline;
    }
</style>