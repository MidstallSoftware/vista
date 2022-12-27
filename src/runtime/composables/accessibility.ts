import { useI18n } from 'vue-i18n'
import tailwindConfig from '#tailwind-config'

export function listThemes(): string[] {
  if (typeof tailwindConfig.daisyui !== 'object') return []

  return tailwindConfig.daisyui.themes
    .map((entry) => {
      if (typeof entry === 'string') return entry
      return Object.keys(entry)
    })
    .flat()
}

export function listLanguages(): string[] {
  return useI18n().availableLocales
}
