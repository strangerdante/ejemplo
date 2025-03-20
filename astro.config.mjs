import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  vite: {
    build: {
      rollupOptions: {
        external: [
          "prosemirror-state",
          "prosemirror-view",
          "prosemirror-model",
          "prosemirror-schema-basic",
          "prosemirror-schema-list",
          "prosemirror-keymap",
          "prosemirror-commands",
          "prosemirror-history",
        ],
      },
    },
  },
});
