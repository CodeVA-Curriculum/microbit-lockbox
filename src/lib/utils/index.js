const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/lib/content/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        const postPath = path // TODO: slice this boi
  
        return {
          meta: metadata,
          path: postPath,
        }
      })
    )
  
    return allPosts
  }

const fetchPost = async (slug) => {
    const allPostFiles = import.meta.glob('/src/lib/content/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        const postPath = path // TODO: slice this boi
  
        return {
          meta: metadata,
          path: postPath,
        }
      })
    )
    console.log("Hello")
    return allPosts
}

export {fetchMarkdownPosts, fetchPost}