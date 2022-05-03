import { defineNuxtConfig } from 'nuxt'
import MSNuxtLib from '..'

export default defineNuxtConfig({
  modules: ['@intlify/nuxt3', '@nuxtjs/color-mode', MSNuxtLib],
  debug: true,
  vista: {
    branding: {
      kind: 'product',
      license: 'GPL-3.0',
    },
    layouts: {
      default: {
        links: [{ url: '/', icon: 'mdi-home', title: { key: 'page.home' } }],
      },
    },
  },
  intlify: {
    vueI18n: {
      locale: 'en',
      fallbackRoot: true,
      messages: {
        en: {
          company: {
            name: 'Midstall Software',
          },
          product: {
            name: 'Vista',
          },
          page: {
            home: 'Home',
          },
        },
        ja: {
          company: {
            name: 'ミッドストールソフトウェア',
          },
          product: {
            name: 'ビスタ',
          },
          page: {
            home: 'ホメ',
          },
        },
      },
    },
  },
})
