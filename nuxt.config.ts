import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui',
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
