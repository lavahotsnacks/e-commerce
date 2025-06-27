// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
  // css: ['~/assets/css/tailwind.css'] // From the documentation, it says that the tailwindcss module automatically includes Tailwind CSS, so this line is not needed.
})
