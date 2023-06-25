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