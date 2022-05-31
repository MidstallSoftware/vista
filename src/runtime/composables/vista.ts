import { useRoute, useHead, useNuxtApp } from '#app'
import { branding } from '#midstallsw-vista-options'
import { useI18n as _useI18n } from 'vue-i18n'
import { computed, watch } from 'vue'
import type { VistaInstance } from '../types'

export const useVista = () => {
  const { $vista } = useNuxtApp()
  const $i18n = _useI18n({ useScope: 'global' })

  const getWebsiteI18nKey = () => {
    switch (branding.kind) {
      case 'product':
        return 'product.name'
      case 'company':
        return 'company.name'
      default:
        return 'website.name'
    }
  }

  const getWebsiteName = () => $i18n.t(getWebsiteI18nKey())

  const defineHead = () => {
    const route = useRoute()

    $i18n.locale.value = $vista.computed.locale.value

    useHead(
      computed(() => ({
        titleTemplate: `%s - ${getWebsiteName()}`,
        meta: [
          {
            name: 'og:title',
            content: `${$i18n.t(route.meta.title as string)} - ${$i18n.t(
              getWebsiteI18nKey()
            )}`,
          },
          typeof route.meta.description === 'string'
            ? {
                name: 'og:description',
                content: $i18n.t(route.meta.description as string),
              }
            : null,
        ].filter((v) => !!v),
      }))
    )
  }

  return {
    refs: $vista.refs,
    computed: $vista.computed,
    cookies: $vista.cookies,
    getWebsiteName,
    defineHead,
  } as VistaInstance
}

export function useI18n(options?: Parameters<typeof _useI18n>[0] & {}) {
  const $i18n = _useI18n(options)
  const $vista = useVista()

  watch(
    () => $vista.cookies.locale.value,
    (locale) => {
      $i18n.locale = $vista.cookies.locale.value
    }
  )

  return $i18n
}
