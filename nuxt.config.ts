// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Mateus Ávila - Front-end Developer',
      meta: [
        {
          property: 'og:image', content: 'https://wp.mateusavila.com.br/wp-content/uploads/2023/09/share-site.jpg'
        },
        {
          property: 'og:title', content: 'Mateus Ávila - Front-end Developer'
        },
        {
          name: 'description', content: "Hello World! I'm Mateus Ávila, a dedicated front-end developer with expertise in Vue.js, TypeScript, and WordPress. Let's craft exceptional digital experiences together!"
        },
        {
          property: 'og:description', content: "Hello World! I'm Mateus Ávila, a dedicated front-end developer with expertise in Vue.js, TypeScript, and WordPress. Let's craft exceptional digital experiences together!"
        },
        {
          name: 'twitter:card', content: "summary_large_image"
        },
      ],
      link: [
        { rel: 'icon', type: 'image/ico', href: '/favicon.png' },
        { rel: 'preconnect', href: '//fonts.googleapis.com' },
        { rel: 'preconnect', href: '//fonts.gstatic.com' },
        { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,300;9..40,400;9..40,600;9..40,700;9..40,900&display=swap' },
      ]
    }
  },
  ssr: false,
  devtools: { 
    enabled: false,
  },
  css: ['~/assets/font/iconfont.css'],
  modules: [
    '@unocss/nuxt',
  ],
})
