<template>
  <table class="table w-full">
    <thead>
      <tr>
        <th>{{ $i18n.t('name') }}</th>
        <th>{{ $i18n.t('arguments') }}</th>
        <th>{{ $i18n.t('returns') }}</th>
        <th>{{ $i18n.t('description') }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(ex, i) in types" :key="i">
        <th>
          <code>{{ ex.name }}</code>
        </th>
        <th>
          <code v-if="ex.arguments" class="text-info"
            ><type-label :value="ex.arguments" is-arguments
          /></code>
        </th>
        <th>
          <code class="text-info"><type-label :value="ex.type" /></code>
        </th>
        <th class="break-normal">{{ ex.description }}</th>
      </tr>
      <slot />
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { useI18n } from '../../dist/runtime/composables/vista'

const $i18n = useI18n()
const { types } = defineProps<{
  types: {
    name: string
    arguments: string
    type: string
    description: string
  }[]
}>()
</script>
<i18n>
{
    "en": {
        "name": "Name",
        "returns": "Returns",
        "description": "Description"
    }
}
</i18n>
