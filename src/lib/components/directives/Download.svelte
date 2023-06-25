<script>
    import Fa from 'svelte-fa'
    import {faDownload} from '@fortawesome/free-solid-svg-icons'
    export let href;
</script>

<a class='button mb-4' href="{href}" download><span><slot /></span><Fa icon='{faDownload}' /></a>

<style>
    span {
        margin-right: 1rem;
    }
</style>