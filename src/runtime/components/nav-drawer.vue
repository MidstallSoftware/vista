<template>
  <div class="drawer">
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
      <label :for="id" class="drawer-overlay"></label>
      <vs-nav-menu
        class="p-4 overflow-y-auto w-80 bg-base-100 text-base-content"
        :links="links"
      >
        <li>
          <div class="btn-group">
            <vs-lang-switch class="dropdown-bottom" tabindex="3" />
            <vs-theme-switch class="dropdown-bottom" tabindex="4" />
          </div>
          <slot name="side" />
        </li>
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
