// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import starlightNextjsTheme from 'starlight-nextjs-theme'

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.backopslive.com/',
  integrations: [
    starlight({
      favicon: '/backops-icon.svg',
      plugins: [starlightNextjsTheme()],
      title: 'BackOps Docs',
      sidebar: [
        {
          label: 'Start Here',
          collapsed: false,
          autogenerate: { directory: 'start-here' },
        },
        {
          label: 'Events',
          autogenerate: { directory: 'events' },
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
          autogenerate: { directory: 'modules' },
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
        {
          label: 'Permissions',
          autogenerate: { directory: 'permissions' },
        },
      ],
      customCss: ['./src/styles/global.css'],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
