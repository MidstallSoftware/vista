<template>
  <div class="items-start justify-start sm:p-1 md:p-4 w-full h-full">
    <div class="card">
      <div class="card-body p-2 sm:p-[1em] space-y-4">
        <h1 class="text-3xl">
          {{ $i18n.t('title') }}
        </h1>

        <p>{{ $i18n.t('description') }}</p>

        <i18n-t keypath="import-path" tag="b">
          <code>/runtime/composables/accessibility.{cjs,mjs,d.ts}</code>
        </i18n-t>

        <exports-table :types="types" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../../../../dist/runtime/composables/vista'
import { definePageMeta } from '#imports'

const $i18n = useI18n()

const types = computed(() => [
  {
    name: 'listThemes()',
    type: 'string[]',
    description: $i18n.t('exports.list-themes'),
  },
  {
    name: 'listLanguages()',
    type: 'string[]',
    description: $i18n.t('exports.list-languages'),
  },
])

definePageMeta({
  title: 'page.docs.composables.accessibility',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageDocsComposablesAccessibility',
}
</script>
<i18n>
{
    "en": {
        "title": "Accessibility",
        "description": "Accessibility related functions.",
        "exports": {
            "list-themes": "Returns a string array of all the available themes.",
            "list-languages": "Returns a string array of all the available languages."
        }
    }
}
</i18n>
