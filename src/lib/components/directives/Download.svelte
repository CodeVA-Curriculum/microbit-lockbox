<script>
    export let href=""
    import {onMount} from 'svelte'

    onMount(()=> {
        console.log("Loaded Download.svelte")
    })
</script>

<a class='button' href="{href}">Something</a>