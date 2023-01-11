// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
  ],
  css: [],
  build: {
    transpile: [],
  },
  plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],
  runtimeConfig: {
    public: {
      test: '122',
    },
    supabase_url: process.env.SUPABASE_URL,
    supabase_api_key: process.env.SUPABASE_KEY,
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Document Naming Tool',
      meta: [
        // <meta name="description" content="My amazing site">
        {
          name: 'description',
          content:
            'Create structured document and file names and get yourself and your team on the same page!',
        },
      ],
    },
  },
});
