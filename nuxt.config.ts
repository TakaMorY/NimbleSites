// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@vueuse/nuxt',],
  css: [
    '/assets/css/global.css'
  ],
  app: {
    head: {
      title: 'NimbleSites - Профессиональные веб-решения', // Заголовок сайта
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'NimbleSites - создание современных сайтов. Повысьте эффективность вашего бизнеса с нашими решениями.'
        },
        // Open Graph (для соцсетей и улучшенного отображения в поисковиках)
        { property: 'og:title', content: 'NimbleSites - Профессиональные веб-решения' },
        { property: 'og:description', content: 'Создаем современные сайты для бизнеса без больших затрат.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ваш-сайт.com' },
        { property: 'og:image', content: 'https://ваш-сайт.com/og-image.jpg' }, // Добавьте превью для соцсетей
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, // Favicon
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }, // Для мобильных устройств
      ],
    }
  }





});
