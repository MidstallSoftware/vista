import { defineNuxtConfig } from 'nuxt'
import MSNuxtLib from '..'

export default defineNuxtConfig({
  modules: [MSNuxtLib, '@intlify/nuxt3'],
  vista: {
    branding: {
      kind: 'product',
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
            name: 'Nuxt Library',
          },
        },
        ja: {
          company: {
            name: 'ミッドストールソフトウェア',
          },
        },
      },
    },
  },
})
