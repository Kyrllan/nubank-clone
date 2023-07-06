// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
    },
  },
  devtools: {enabled: true},
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/css/fonts.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Poppins: true,
          download: true,
          inject: true,
        },
      },
    ],
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
});
