import { BrandKind, LayoutOptions } from './runtime/types'
export * from './runtime/types'

export interface ModuleOptions {
  i18n?: {
    localeDir?: string
  }
  branding?: {
    kind: BrandKind
    license?: string | null
  }
  layouts?: Record<string, LayoutOptions>
}
