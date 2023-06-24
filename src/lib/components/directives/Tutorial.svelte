<script lang='ts'>
    import {onMount} from 'svelte'
    import {base} from '$app/paths'
    export let slug:string;
    let tutorialData:any;

    onMount(async () => {
        const res = await fetch(`${base}/api/tutorials/${slug}`)
        tutorialData = await res.json()
        console.log(tutorialData)
    })
</script>

<div class='tutorial card'>
    <div class='card-content'>
        {#if tutorialData}
        <h3>{tutorialData.meta.title}</h3>
        Tutorial: {slug}
        {/if}
    </div>
</div>