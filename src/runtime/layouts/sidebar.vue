<template>
  <vs-nav
    id="sidebar-layout-drawer"
    :links="layoutOptions.links"
    :kind="layoutOptions.navbar"
  >
    <vs-sidebar id="sidebar-layout-sidebar" :links="sidedLinks.sidebar || []">
      <main
        :class="
          layoutOptions.center
            ? ['flex', 'justify-center', 'py-8', 'px-8', 'h-fit']
            : undefined
        "
      >
        <NuxtPage />
      </main>
    </vs-sidebar>
  </vs-nav>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useLayoutOptions } from '../composables/layout'
import { generateLinkSides } from '../composables/link'
import { useVista } from '../composables/vista'

const $vista = useVista()
const layoutOptions = useLayoutOptions('sidebar')
const sidedLinks = computed(() => generateLinkSides(layoutOptions.value.links))

$vista.defineHead()
</script>
<script lang="ts">
export default {
  name: 'LayoutVsSidebar',
}
</script>
