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
                  autogenerate: { directory: 'start-here' },

              },
              {
                  label: 'Guides',
                  autogenerate: { directory: 'guides' },

              },
              {
                  label: 'Modules',
                  autogenerate: { directory: 'modules' },
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