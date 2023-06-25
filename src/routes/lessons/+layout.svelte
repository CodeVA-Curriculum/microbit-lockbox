<script>
    import Nav from '$lib/components/Nav.svelte'
</script>

<div class='lessons'>
    <Nav links={[{
        text:"Tutorials",
        path:"/tutorials"
    },
    {
        text:"Lessons",
        path:"/lessons"
    }]} />
    <div class='container section'>
        <slot />
    </div>
</div>