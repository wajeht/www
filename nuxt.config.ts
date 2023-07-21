import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport:
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui',
      title: 'jaw.dev',
    },
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
  devServerHandlers: [],
  srcDir: './src',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxtjs/plausible',
  ],
  tailwindcss: {
    cssPath: '/css/tailwind.css',
  },
  plausible: {
    domain: 'jaw.dev',
 },
});
