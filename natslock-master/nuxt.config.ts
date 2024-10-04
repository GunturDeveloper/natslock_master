// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: 'http://192.168.183.4:2045',
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/device",
    "@pinia/nuxt"
  ],
  colorMode: {
    classSuffix: ''
  }
})