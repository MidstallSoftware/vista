<template>
  <div class="drawer drawer-mobile">
    <input :id="id" type="checkbox" class="drawer-toggle" />
    <div
      :class="{
        'drawer-content': true,
        flex: true,
        'flex-col': true,
        'items-center': center,
        'justify-center': center,
      }"
    >
      <slot />
    </div>
    <div class="drawer-side">
      <label :for="id" class="drawer-overlay" />
      <slot name="side-top" />
      <vs-nav-menu
        class="p-4 overflow-y-auto w-80 bg-base-200 text-base-content"
        :links="links"
      >
        <slot name="side" />
      </vs-nav-menu>
    </div>
  </div>
</template>
<script setup lang="ts">
import { LinkCollection } from '../../types'

const { links, id, center } = defineProps<{
  links?: LinkCollection
  id: string
  center?: boolean
}>()
</script>
<script lang="ts">
export default {
  name: 'VsSidebar',
}
</script>
