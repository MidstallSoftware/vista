import { defineNuxtConfig } from 'nuxt'
import MSNuxtLib from '..'

export default defineNuxtConfig({
  modules: ['@intlify/nuxt3', MSNuxtLib],
  debug: true,
  vista: {
    branding: {
      kind: 'product',
      license: 'GPL-3.0',
    },
  },
  vite: {
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
      },
    },
  },
  alias: {
    'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
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
