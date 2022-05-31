<template>
  <table class="table w-full">
    <thead>
      <tr>
        <th>{{ $i18n.t('name') }}</th>
        <th>{{ $i18n.t('description') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(slot, i) in slots" :key="i">
        <th>
          <code>{{ slot.name }}</code>
        </th>
        <th>{{ slot.description }}</th>
      </tr>
      <slot />
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { useI18n } from '../../dist/runtime/composables/vista'

const $i18n = useI18n()
const { slots } = defineProps<{
  slots: { name: string; description: string }[]
}>()
</script>
<i18n>
{
    "en": {
        "name": "Name",
        "description": "Description"
    }
}
</i18n>
