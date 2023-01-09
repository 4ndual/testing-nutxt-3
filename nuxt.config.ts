// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/image-edge',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',

      ],
    runtimeConfig: {
        public: {
          baseURL: process.env.BASE_URL || 'https://fakestoreapi.com/products',
        },
    },
    image: {
        dir:'assets/images'
      }

})
