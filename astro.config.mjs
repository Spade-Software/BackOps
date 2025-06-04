// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite';
import starlightNextjsTheme from 'starlight-nextjs-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.backopslive.com/',
  integrations: [
    starlight({
      plugins: [starlightNextjsTheme()],
      title: 'BackOps Docs',
      sidebar: [
        {
          label: 'Start Here',
          collapsed: false,
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
