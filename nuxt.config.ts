import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: false,
  typescript: {
    strict: true,
    shim: false,
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'UK BSL Translator & Learning Platform',
      meta: [
        { name: 'description', content: 'Bidirectional BSL translator and learning companion built with Nuxt 3.' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      ollamaBaseUrl: 'http://localhost:11434',
    },
  },
});
