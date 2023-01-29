import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    devServerHandlers: [],
    srcDir: './src',
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
    ],
})
