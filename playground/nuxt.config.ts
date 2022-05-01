import { defineNuxtConfig } from 'nuxt'
import MSNuxtLib from '..'

export default defineNuxtConfig({
  modules: [MSNuxtLib, '@intlify/nuxt3'],
  vista: {
    branding: {
      kind: 'product',
      license: 'GPL-3.0',
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
        },
        ja: {
          company: {
            name: 'ミッドストールソフトウェア',
          },
          product: {
            name: 'ビスタ',
          },
        },
      },
    },
  },
})
