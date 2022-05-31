<template>
  <table class="table w-full">
    <thead>
      <tr>
        <th>{{ $i18n.t('name') }}</th>
        <th>{{ $i18n.t('type') }}</th>
        <th>{{ $i18n.t('description') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(prop, i) in props" :key="i">
        <th>
          <code>{{ prop.name }}</code>
        </th>
        <th>
          <code class="text-info"><type-label :value="prop.type" /></code>
        </th>
        <th>{{ prop.description }}</th>
      </tr>
      <slot />
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { useI18n } from '../../dist/runtime/composables/vista'

const $i18n = useI18n()
const { props } = defineProps<{
  props: { name: string; type: string; description: string }[]
}>()
</script>
<i18n>
{
    "en": {
        "name": "Name",
        "type": "Type",
        "description": "Description"
    }
}
</i18n>
