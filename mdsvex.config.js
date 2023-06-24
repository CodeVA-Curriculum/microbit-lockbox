import { defineMDSveXConfig as defineConfig } from "mdsvex";
import remarkParse from 'remark-parse'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  layout: {
    _: './src/lib/components/MdWrapper.svelte',
  },
  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [remarkParse, remarkFrontmatter, remarkGfm, remarkDirective, remarkDirectiveRehype],
  rehypePlugins: [],
});

export default config;
