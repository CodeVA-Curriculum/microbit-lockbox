export async function load({ params }){
    // const post = await import(`../${params.slug}.md`)
    const post = await import(`../../../lib/content/${params.slug}.md`)
    const { title, description, video, authors } = post.metadata
    const content = post.default
  
    return {
      content,
      authors,
      title,
      description,
      video,
    }
  }

  // entries  
  export async function entries() {
    const paths = import.meta.glob('$lib/content/*.md')
    let cleanPaths = []
    for(const path in paths) {
      cleanPaths.push({
        slug: path.slice("/src/lib/content/".length, -3)
      })
    }
    return cleanPaths;
}

  export const prerender = true;