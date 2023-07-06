// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'UTF-8',
    },
  },
  devtools: {enabled: true},
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/css/fonts.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  build: {
    transpile: [
      'vuetify',
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
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
