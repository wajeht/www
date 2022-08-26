import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        title: 'jaw.dev'
    },
    srcDir: './src',
    image: {
        dir: './public/images'
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
    ],
})
