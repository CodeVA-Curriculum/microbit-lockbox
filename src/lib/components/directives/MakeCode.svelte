<script>
    export let view="code"
    export let id;
</script>

<div>
    <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://makecode.microbit.org/---codeembed#pub:{id}" allowfullscreen="allowfullscreen" frameborder="0" sandbox="allow-scripts allow-same-origin"></iframe>
</div>

<style>
    div {
        position:relative;
        margin: 2rem 0rem;
        height:calc(300px + 5em);
        width:100%;
        overflow:hidden;
        border-radius: 24px;
        border-width: 2px;
        border-color: black;
        border-style: double;
    }
</style>