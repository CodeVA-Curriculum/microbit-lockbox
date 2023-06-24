import { fetchMarkdownPosts } from "$lib/utils"
import { json } from '@sveltejs/kit'

export const GET = async ({ params }) => {
    const allPosts = await fetchMarkdownPosts()
    let obj = {}
    for(const i in allPosts) {
      if(allPosts[i].path.includes(params.params)) {
        // console.log(allPosts[i])
        obj = allPosts[i]
        break
      }
      
    }
    return json(obj)
}