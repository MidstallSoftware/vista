import { useRoute, useHead, useNuxtApp } from '#app'
import { branding } from '#midstallsw-vista-options'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import type { VistaInstance } from '../types'

export const useVista = () => {
  const { $vista } = useNuxtApp()
  const $i18n = useI18n({ useScope: 'global' })

  const getWebsiteI18nKey = () => {
    return branding.kind === 'product' ? 'product.name' : 'company.name'
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
        ],
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
