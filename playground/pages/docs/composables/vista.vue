<template>
  <div class="items-start justify-start sm:p-1 md:p-4 w-full h-full">
    <div class="card">
      <div class="card-body p-2 sm:p-[1em] space-y-4">
        <h1 class="text-3xl">
          {{ $i18n.t('title') }}
        </h1>

        <p>{{ $i18n.t('description') }}</p>

        <i18n-t keypath="import-path" tag="b">
          <code>/runtime/composables/vista.{cjs,mjs,d.ts}</code>
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
    name: 'useVista()',
    type: 'VistaInstance',
    description: $i18n.t('exports.use-vista'),
  },
  {
    name: 'useI18n(options)',
    arguments: 'Parameters<typeof useI18n>',
    type: 'typeof useI18n()',
    description: $i18n.t('exports.use-i18n'),
  },
])

definePageMeta({
  title: 'page.docs.composables.vista',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageDocsComposablesVista',
}
</script>
<i18n>
{
    "en": {
        "title": "Vista",
        "description": "Vista related functions, this has everything you want to use.",
        "exports": {
            "use-vista": "Returns the instance of Vista.",
            "use-i18n": "Wrapper for inlify's useI18n method."
        }
    }
}
</i18n>
