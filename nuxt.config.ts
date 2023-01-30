import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'jaw.dev',
        }
      },
    devServerHandlers: [],
    srcDir: './src',
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
    ],
    tailwindcss: {
        cssPath: '/css/tailwind.css',
    }
})
