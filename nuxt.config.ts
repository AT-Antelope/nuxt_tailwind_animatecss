// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    // Options
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['animate.css']
})
