<template>
  <v-footer :class="['w-100', ...extraClasses]">
    <div v-if="kind === 'company'" class="w-100">
      <v-card elevation="0" rounded="0" width="100%" class="text-center">
        <v-card-text>
          <v-spacer />
          <slot />
          <v-spacer />
        </v-card-text>

        <v-divider />
        <v-card-text>
          <vs-copyright />
        </v-card-text>
      </v-card>
    </div>
    <div v-else-if="kind === 'product'" class="w-100">
      <v-container class="d-flex flex-column w-100">
        <div class="d-flex w-100 align-center px-4">
          <v-spacer />
          <slot />
        </div>

        <div class="px-4 py-2 text-center w-100">
          <vs-copyright />
        </div>
      </v-container>
    </div>
    <div v-else class="w-100">
      <slot />
    </div>
  </v-footer>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { BrandKind } from '../../types'

const { kind, bottom, fixed } = defineProps<{
  kind?: BrandKind
  bottom?: boolean
  fixed?: boolean
}>()

const extraClasses = computed(() => {
  const c = []
  if (bottom) c.push('v-footer--bottom', 'v-footer--absolute')
  if (fixed) c.push('v-footer--fixed')
  return c
})
</script>
<script lang="ts">
export default {
  name: 'VSFooter',
}
</script>
<style>
/* stylelint-disable selector-class-pattern */
.v-footer--bottom {
  bottom: 0;
}
/* stylelint-enable selector-class-pattern */
</style>
