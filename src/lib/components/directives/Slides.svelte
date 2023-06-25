<script lang='ts'>
    export let link:string = ''
    export let title:string = "An embedded slideshow"
    export let lesson:string = ''
</script>

<div class='slides columns block'>
    <div class='column'>
        <slot />
        <p class='block'>You may find it useful to open your own copy of the slides as you work. Click the button below to pull up a public version of the slide deck in a new browser tab.</p>
        <div class='has-text-centered'>
            <a class='button is-primary' href={link} target='_blank'>Open Slides in New Tab</a>
            <a class='button' href={lesson} target='_blank'>Open Lesson Plan</a>
        </div>
    </div>
    <div class='column'>
        <iframe title={title} src={`${link}/embed?start=false&loop=false&delayms=60000`} frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </div>
    
</div>