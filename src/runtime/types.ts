import type { Ref, WritableComputedRef } from 'vue'
import type { CookieRef } from 'nuxt/dist/app/composables'

export interface I18nString {
  key: string
  options?: any
  scope?: 'local' | 'parent' | 'global'
}

export type BetterString = string | I18nString

export interface BasicLink {
  url: string
  icon?: string
  side?: string[]
  title?: BetterString
}

export interface LinkGroup {
  title?: BetterString
  icon?: string
  side?: string[]
  children: LinkCollection
}

export type Link = BasicLink | LinkGroup
export type LinkCollection = Record<string, Link> | Link[]
export type BrandKind = 'company' | 'product' | 'personal'
export type NavbarKind = 'minimal'

export interface LayoutOptions {
  links?: LinkCollection
  navbar?: false | NavbarKind
  center?: boolean
}

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
  interface PageMeta extends MetaInjection {}
}

declare module 'vue-router' {
  interface RouteMeta extends MetaInjection {}
}

interface PluginInjection {
  $vista: VistaBaseInstance
}

interface MetaInjection {
  layoutOptions?: LayoutOptions
}
