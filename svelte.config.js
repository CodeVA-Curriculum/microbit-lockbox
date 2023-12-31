import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from "@sveltejs/kit/vite";

// load content to prerender


/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
    }),
    mdsvex(mdsvexConfig),
  ],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    // adapter: adapter(),
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: '/microbit-lockbox', // uncomment this before deployment
    }
  },
};

export default config;
