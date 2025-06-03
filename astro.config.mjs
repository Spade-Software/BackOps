// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'BackOps',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Spade-Software/BackOps' }],
          sidebar: [
              {
                  label: 'Start Here',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'BackOps 101', slug: 'start-here/getting-started' },
                  ],
              },
              {
                  label: 'Guides',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
		  customCss: [
			'./src/styles/global.css',
		  ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});