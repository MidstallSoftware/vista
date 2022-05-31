<template>
  <div class="items-start justify-start sm:p-1 md:p-4 w-full h-full">
    <div class="card">
      <div class="card-body p-2 sm:p-[1em] space-y-4">
        <h1 class="text-3xl">
          {{ $i18n.t('title') }}
        </h1>

        <p>{{ $i18n.t('description') }}</p>

        <prop-table :props="props" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../../../../dist/runtime/composables/vista'
import { definePageMeta } from '#imports'

const $i18n = useI18n()

const props = computed(() => [
  { name: 'key', type: 'string', description: $i18n.t('types.key') },
  { name: 'options', type: 'any?', description: $i18n.t('types.options') },
  {
    name: 'scope',
    type: "'local' | 'parent' | 'global'",
    description: $i18n.t('types.scope'),
  },
])

definePageMeta({
  title: 'I18nString',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageDocsTypesI18nString',
}
</script>
<i18n>
{
    "en": {
        "title": "I18nString",
        "description": "An interface which represents a string to be translated.",
        "types": {
          "key": "The translation key.",
          "options": "The options to pass to the translation string.",
          "scope": "The scope to pull the translation from."
        }
    }
}
</i18n>
