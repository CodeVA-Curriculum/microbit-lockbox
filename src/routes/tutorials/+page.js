import { fetchMarkdownPosts } from "$lib/utils"
import {json} from '@sveltejs/kit'

const posts = import.meta.glob('$lib/content/*.md')

  let body = []
  let paths = []

  for (const path in posts) {
      paths.push(path);
      body.push(posts[path]().then(({metadata}) => {
        return { 
            ...metadata,
            path: path.slice("/src/lib/content/".length, -3)
         }
    }))
  }

export async function load(){
    // const post = await import(`../${params.slug}.md`)
    const content = await Promise.all(body)
    // console.log(content)
    return {
      content
    }
  }

  export const prerender=true;