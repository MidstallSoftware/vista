<template>
  <v-footer class="w-100" :bottom="bottom" :fixed="fixed">
    <div v-if="kind === 'company'" class="w-100">
      <v-card elevation="0" rounded="0" width="100%" class="text-center">
        <v-card-text>
          <ms-copyright />
        </v-card-text>
      </v-card>
    </div>
    <div v-else-if="kind === 'social'" class="w-100">
      <v-container class="d-flex flex-column w-100">
        <div class="d-flex w-100 align-center px-4"></div>

        <div class="px-4 py-2 text-center w-100">
          <ms-copyright />
        </div>
      </v-container>
    </div>
    <div v-else class="w-100">
      <slot />
    </div>
  </v-footer>
</template>
<script setup lang="ts">
type FooterKind = 'company' | 'social'

const { kind, bottom } = defineProps<{
  kind?: FooterKind
  bottom?: boolean
  fixed?: boolean
}>()
</script>
