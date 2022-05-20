import {
  defineNuxtPlugin,
  useCookie,
  useRequestHeaders,
  useNuxtApp,
} from '#app'
import { compileToFunction, registerMessageCompiler } from '@intlify/core-base'
import type { VistaBaseInstance } from './types'
import { pick } from 'accept-language-parser'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'
import type { Ref } from 'vue'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { vuetify as vuetifyOptions } from '#midstallsw-vista-options'
import deepmerge from 'deepmerge'

registerMessageCompiler(compileToFunction)

const makeDark = (obj) => ({
  ...obj,
  surface: '#24283b',
  secondary: '#171722',
  accent: '#7aa2f7',
  error: '#f7768e',
  info: '#2ac3de',
  success: '#9ece6a',
  warning: '#ff9e64',
  'on-background': '#7982a9',
  'on-surface': '#a9b1d6',
  'on-primary': '#cfc9c2',
  'on-secondary': '#cfc9c2',
  'on-success': '#cfc9c2',
  'on-warning': '#cfc9c2',
  'on-error': '#cfc9c2',
  'on-info': '#cfc9c2',
})

export default defineNuxtPlugin((nuxtApp) => {
  let inst: VistaBaseInstance | null = null

  const $vista = (() => {
    const createVista: () => VistaBaseInstance = () => {
      const $i18n = useI18n({ useScope: 'global' })
      const refs: Record<string, Ref<any>> = {
        theme: ref(
          (() => {
            const { $colorMode } = useNuxtApp()
            if ($colorMode.preference === 'system' && !$colorMode.unknown) {
              if ($colorMode.value === 'light') return 'night-light'
              else if ($colorMode.value === 'dark') return 'night'
              return $colorMode.value
            }
            return 'night'
          })()
        ),
        locale: ref(
          (() => {
            const acceptLangHeader =
              useRequestHeaders()['accept-language'] || 'en'
            return pick($i18n.availableLocales, acceptLangHeader)
          })()
        ),
      }

      const cookies = Object.fromEntries(
        Object.entries(refs).map(([key, value]) => [
          key,
          useCookie(`vista.${key}`, {
            default: () => value,
          }),
        ])
      )

      const computeds = {
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
        computed: computeds,
      }
    }

    return {
      get cookies() {
        if (!inst) inst = createVista()
        return inst.cookies
      },
      get computed() {
        if (!inst) inst = createVista()
        return inst.computed
      },
      get refs() {
        if (!inst) inst = createVista()
        return inst.refs
      },
    }
  })()

  nuxtApp.provide('vista', $vista)

  const themeVars: Record<string, string | number> = {
    'high-emphasis-opacity': 1,
    'medium-emphasis-opacity': 1,
  }
  const vuetify = createVuetify({
    components,
    directives,
    ...deepmerge(
      {
        icons: {
          defaultSet: 'mdi',
          aliases,
          sets: {
            mdi,
          },
        },
        defaults: {
          global: {
            flat: true,
          },
          VAppBar: {
            color: 'background',
            flat: false,
          },
          VNavigationDrawer: {
            color: 'background',
            flat: false,
          },
          VFooter: {
            color: 'background',
            flat: false,
          },
        },
        theme: {
          defaultTheme: 'night',
          themes: {
            night: {
              dark: true,
              colors: makeDark({
                background: '#1a1b26',
                primary: '#1a1b26',
              }),
              variables: themeVars,
            },
            'night-storm': {
              dark: true,
              colors: makeDark({
                background: '#1f2335',
                primary: '#24283b',
              }),
              variables: themeVars,
            },
            'night-light': {
              dark: false,
              colors: {
                background: '#cbccd1',
                surface: '#d5d6db',
                primary: '#d5d6db',
                secondary: '#cecfd4',
                accent: '#34548a',
                error: '#8c4351',
                info: '#166775',
                success: '#485e30',
                warning: '#965027',
                'on-background': '#4c505e',
                'on-surface': '#343b59',
                'on-primary': '#343b58',
                'on-secondary': '#343b58',
                'on-success': '#343b58',
                'on-warning': '#343b58',
                'on-error': '#343b58',
                'on-info': '#343b58',
              },
              variables: themeVars,
            },
          },
        },
      },
      vuetifyOptions || {}
    ),
  })

  nuxtApp.vueApp.use(vuetify)
})
