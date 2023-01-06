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
});
