// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  nitro: {
    storage: {
      // Используем файловую систему для хранения состояний
      maintenance: {
        driver: 'fs',
        base: './data/maintenance'
      },
      auth: {
        driver: 'fs',
        base: './data/auth'
      }
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@vueuse/nuxt', 'nuxt-icon'],
  app: {
    head: {
      title: 'NimbleSites - Профессиональные веб-решения',
      meta: [
        {
          name: 'description',
          content: 'NimbleSites - создание современных сайтов. Повысьте эффективность вашего бизнеса с нашими решениями.'
        },
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport', content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'keywords',
          content: 'NimbleSites, разработка сайтов, Nimble site, Nimble, nimble, nimblesites, nimblesite, nimble sites, нимбле сайт, нимбле сайтс, ТшьидуЫшеуы'
        },
        {
          property: 'og:title',
          content: 'NimbleSites - Профессиональные веб-решения'
        },
        {
          property: 'og:description',
          content: 'NimbleSites - создание современных сайтов. Повысьте эффективность вашего бизнеса с нашими решениями.'
        },
        {
          property: 'og:image',
          content: 'https://nimble-sites.vercel.app/og/og-image.jpg'
        },
        {
          property: 'og:url',
          content: 'https://nimble-sites.vercel.app/'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://nimble-sites.vercel.app/'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/icon-32x32.png'
        }
      ]
    }
  }





});
