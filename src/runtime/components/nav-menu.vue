<template>
  <ul
    v-if="links"
    :class="[
      submenu ? 'bg-base-200' : 'menu',
      horizontal ? 'menu-horizontal' : undefined,
      rounded ? 'rounded-box' : undefined,
    ]"
  >
    <vs-nav-button
      v-for="(link, i) in Array.isArray(links) ? links : Object.values(links)"
      :key="i"
      :link="link"
      list-entry
    />
    <slot />
  </ul>
</template>
<script setup lang="ts">
import { LinkCollection } from '../../types'

const { links, submenu, horizontal, rounded } = defineProps<{
  links?: LinkCollection
  submenu?: boolean
  horizontal?: boolean
  rounded?: boolean
}>()
</script>
