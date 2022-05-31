<template>
  <vs-nav
    id="default-layout-drawer"
    :links="layoutOptions.links"
    :kind="layoutOptions.navbar"
  >
    <main
      :class="
        layoutOptions.center
          ? ['flex', 'justify-center', 'py-8', 'px-8', 'h-fit']
          : undefined
      "
    >
      <NuxtPage />
    </main>
  </vs-nav>
</template>
<script setup lang="ts">
import { useLayoutOptions } from '../composables/layout'
import { useVista } from '../composables/vista'

const $vista = useVista()
const layoutOptions = useLayoutOptions('default')

$vista.defineHead()
</script>
<script lang="ts">
export default {
  name: 'LayoutVsDefault',
}
</script>
