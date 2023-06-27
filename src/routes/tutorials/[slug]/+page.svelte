<script>
  import DynamicMarkdown from '$lib/components/DynamicMarkdown.svelte';
  import { onMount } from 'svelte';
  import {base} from '$app/paths'
  export let data;

  onMount(() => {
    console.log(data)
  })
</script>

<article class='container section content'>
  <div class='columns'>
    <div class='column is-one-third'>
      <h1>{ data.title }</h1>
      <p class='subtitle'><i>by Jon Stapleton</i></p>
      <p>{ data.description }</p>
      <div class='mt-5'>
        <a class='button' href='{base}/tutorials'>Return to Tutorials</a>
      </div>
    </div>
    <div class='column is-two-thirds'>
      <!-- <iframe src={`https://www.youtube.com/embed/${data.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      <video width="100%" controls>
        <source src="{base}/videos/{data.video}.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    </div>
  </div>
  <hr>
  <!-- <h1>{ data.title }</h1>
  <p>Published: {data.date}</p> -->
  <!-- <svelte:component this={data.content} /> -->
  <DynamicMarkdown data={data} />
</article>

<style>
  iframe {
    width: 100%;
    height: 348px;
    border-radius: 32px;
  }
  video {
    border-radius: 32px;
  }
</style>