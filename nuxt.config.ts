import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
          link: [
            {
              rel: 'stylesheet',
              href: 'https://unpkg.com/@picocss/pico@latest/css/pico.min.css'
            }
          ]
        }
    },
    modules: [
        '@nuxt/content',
        '@nuxt/ui',
        '@vueuse/nuxt',
        '@nuxtjs/color-mode',
        '@nuxthq/admin'
    ],
    rootDir: __dirname,
    content: {
        navigation: {
          fields: ['icon']
        },
        highlight: {
          theme: 'one-dark-pro',
          preload: ['json', 'js', 'ts', 'html', 'css', 'vue']
        }
    },
    typescript: {
        shim: false
    }
})
