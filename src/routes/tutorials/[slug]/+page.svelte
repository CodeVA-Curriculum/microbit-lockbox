<script>
    import DynamicMarkdown from '$lib/components/DynamicMarkdown.svelte';
    export let data;
</script>
  
  <article class='container section'>
    <!-- <h1>{ data.title }</h1>
    <p>Published: {data.date}</p> -->
    <!-- <svelte:component this={data.content} /> -->
    <DynamicMarkdown data={data} />
  </article>