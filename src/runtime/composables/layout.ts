import { useRoute } from '#app'
import deepmerge from 'deepmerge'
import { computed, ComputedRef } from 'vue'
import { layouts } from '#midstallsw-vista-options'
import { LayoutOptions } from '../../types'

export function useLayoutOptions(
  layoutName: string,
  def: LayoutOptions = { links: [], navbar: null, center: true }
): ComputedRef<LayoutOptions> {
  return computed(() =>
    deepmerge(
      deepmerge<LayoutOptions>(def, layouts[layoutName] || {}),
      useRoute().meta.layoutOptions || {}
    )
  )
}
