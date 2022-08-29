import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: 'jaw.dev'
    },
    srcDir: './src',
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
    ],
})
