<script>
    import MdWrapper from "./MdWrapper.svelte";
    import Slides from "./directives/Slides.svelte";
    export let link, lesson;
</script>

<MdWrapper>
    <Slides link={link} lesson={lesson}>
        <slot name='slide-pair' />
    </Slides>
</MdWrapper>
<MdWrapper>
    <slot />
</MdWrapper>

