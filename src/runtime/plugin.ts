import {
  defineNuxtPlugin,
  useCookie,
  useHead,
  useRequestHeaders,
  useRoute,
} from '#app'
import optionsLoader from '#build/midstall.vista.options.mjs'
import type { useColorMode } from '@nuxtjs/color-mode/dist/runtime/composables'
import { pick } from 'accept-language-parser'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'
import type { Ref } from 'vue'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { compileToFunction, registerMessageCompiler } from '@intlify/core-base'

registerMessageCompiler(compileToFunction)

const makeDark = (obj) => ({
  ...obj,
  secondary: '#171722',
  accent: '#7aa2f7',
  error: '#f7768e',
  info: '#2ac3de',
  success: '#9ece6a',
  warning: '#ff9e64',
})

const initVista = () => {
  const $i18n = useI18n({ useScope: 'global' })
  const refs: Record<string, Ref<any>> = {
    theme: ref(
      (() => {
        const colorMode = useColorMode()
        if (colorMode.preference === 'system' && !colorMode.unknown) {
          if (colorMode.value === 'light') return 'night-light'
          else if (colorMode.value === 'dark') return 'night'
          return colorMode.value
        }
        return 'night'
      })()
    ),
    locale: ref(
      (() => {
        const acceptLangHeader = useRequestHeaders()['accept-language'] || 'en'
        return pick($i18n.availableLocales, acceptLangHeader)
      })()
    ),
  }

  const cookies = Object.fromEntries(
    Object.entries(refs).map(([key, value]) => [
      key,
      useCookie(key, {
        default: () => value,
      }),
    ])
  )

  const comps = {
    locale: computed({
      get: () => cookies.locale.value,
      set: (value) => {
        cookies.locale.value = value
        $i18n.locale = value
      },
    }),
  }

  return {
    refs,
    cookies,
    computed: comps,
    getWebsiteName() {
      const { branding } = optionsLoader()
      return $i18n.t(
        branding.kind === 'product' ? 'product.name' : 'company.name'
      )
    },
  }
}

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

  let vista

  return {
    provide: {
      vista() {
        if (!vista) vista = initVista()

        return {
          defineHead() {
            const $i18n = useI18n({ useScope: 'global' })
            const route = useRoute()

            $i18n.locale.value = vista.computed.locale.value

            useHead(
              computed(() => ({
                titleTemplate: `%s - ${vista.getWebsiteName()}`,
                meta: [
                  {
                    name: 'og:title',
                    content: `${$i18n.t(route.meta.title)} - ${$i18n.t(
                      'product.name'
                    )}`,
                  },
                ],
              }))
            )
          },
          ...vista,
        }
      },
    },
  }
})
