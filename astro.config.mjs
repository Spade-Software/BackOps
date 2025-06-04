// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'BackOps',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Spade-Software/BackOps',
        },
      ],
      sidebar: [
        {
          label: 'Start Here',
          autogenerate: { directory: 'start-here' },
        },
        {
          label: 'Collaborators',
          autogenerate: { directory: 'collaborators' },
        },
        {
          label: 'Areas',
          autogenerate: { directory: 'areas' },
        },
        {
          label: 'Modules',
          items: [
            {
              label: 'Modules Overview',
              link: '/modules/introduction',
            },
            {
              label: 'Global Modules',
              autogenerate: { directory: 'modules/globalModules' },
            },
            {
              label: 'Area Modules',
              autogenerate: { directory: 'modules/areaModules' },
            },
          ],
        },
        {
          label: 'Schedule',
          autogenerate: { directory: 'schedule' },
        },
        {
          label: 'Advancing',
          autogenerate: { directory: 'advancing' },
        },
        {
          label: 'Procurement',
          autogenerate: { directory: 'procurement' },
        },
      ],
      customCss: ['./src/styles/global.css'],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
