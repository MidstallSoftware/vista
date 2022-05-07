import type { Ref, WritableComputedRef } from 'vue'
import type { CookieRef } from 'nuxt/dist/app/composables'

export interface VistaBaseInstance {
  refs: Record<string, Ref<any>>
  cookies: Record<string, CookieRef<any>>
  computed: Record<string, WritableComputedRef<any>>
}

export interface VistaInstance extends VistaBaseInstance {
  getWebsiteName(): string
  defineHead(): void
}

// @ts-ignore
declare module 'vue/types/vue' {
  interface Vue {
    $vista: VistaBaseInstance
  }
}

declare module '#app' {
  interface NuxtApp extends PluginInjection {}
}

interface PluginInjection {
  $vista: VistaBaseInstance
}
