import { defineNuxtPlugin } from '#app'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'

const makeDark = (obj) => ({
  ...obj,
  secondary: '#171722',
  accent: '#7aa2f7',
  error: '#f7768e',
  info: '#2ac3de',
  success: '#9ece6a',
  warning: '#ff9e64',
})

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'night',
      themes: {
        night: {
          dark: true,
          colors: makeDark({
            background: '#1a1b26',
            surface: '#1a1b26',
            primary: '#1a1b26',
          }),
        },
        'night-storm': {
          dark: true,
          colors: makeDark({
            background: '#24283b',
            surface: '#24283b',
            primary: '#24283b',
          }),
        },
        'night-light': {
          dark: false,
          colors: {
            background: '#d5d6db',
            surface: '#d5d6db',
            primary: '#d5d6db',
            secondary: '#cecfd4',
            accent: '#34548a',
            error: '#8c4351',
            info: '#166775',
            success: '#485e30',
            warning: '#965027',
          },
        },
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
