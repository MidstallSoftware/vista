import {
  defineNuxtPlugin,
  useCookie,
  useRequestHeaders,
  useNuxtApp,
} from '#app'
import { compileToFunction, registerMessageCompiler } from '@intlify/core-base'
import mdiSvg from '@yeliulee/vue-mdi-svg'
import type { VistaBaseInstance } from './types'
import { pick } from 'accept-language-parser'
import { Ref } from 'vue'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

registerMessageCompiler(compileToFunction)

export default defineNuxtPlugin((nuxtApp) => {
  let inst: VistaBaseInstance | null = null

  const $vista = (() => {
    const createVista: () => VistaBaseInstance = () => {
      const $i18n = useI18n({ useScope: 'global' })
      const refs: Record<string, Ref<any>> = {
        theme: ref(
          (() => {
            const { $colorMode } = useNuxtApp()
            if ($colorMode.preference === 'system') {
              if ($colorMode.value === 'light') return 'night-light'
              else if ($colorMode.value === 'dark') return 'night'
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
            sameSite: 'lax',
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
  nuxtApp.vueApp.use(mdiSvg)
})
