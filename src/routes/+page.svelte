<script>
    import {base} from '$app/paths'
    import Nav from '$lib/components/Nav.svelte'

    
</script>

<section class='hero is-fullheight-with-navbar homepage'>
    <div class='hero-head'>
		<Nav links={[{
            text:"About",
            path:"/about"
        },
        {
            text:"Tutorials",
            path:"/tutorials"
        },
        {
            text:"Lessons",
            path:"/lessons"
        }]} />
	</div>
    <div class='hero-body'>
        <div class='has-text-centered container'>
            <h1 class='title'>Micro:Bit Lockbox</h1>
            <p class='block'>An introductory Micro:Bit project.</p>
            <a class='button is-primary' href="{base}/display-lifecycle">Get Started</a>
            <a class='button' href="{base}/tutorials">View Tutorials</a>
        </div>
    </div>
</section>
