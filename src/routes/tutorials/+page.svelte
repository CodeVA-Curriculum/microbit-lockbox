<script>
    import {onMount} from 'svelte'
    import {base} from '$app/paths'
    import Tutorial from '$lib/components/directives/Tutorial.svelte';
    export let data;

    let tutorialData = []
    onMount(async () => {
        tutorialData = data.content
    })
</script>
<div class='tutorials content'>
    <h1>Micro:Bit Tutorials</h1>
    <p class='block'>Below, you'll find tutorials about lots of different Micro:Bit concepts. Check them out!</p>
    <div class='mt-5 pt-5'>
        {#each tutorialData as tutorial}
            <!-- <Tutorial fetch={false} tutorialData={tutorial} /> -->
            <Tutorial get={false} tutorialData={tutorial} />
        {/each}
    </div>
</div>
<!-- Search by 

- Type (block, concept, application), checkboxes
- Title (text)
- Tag (text) -->