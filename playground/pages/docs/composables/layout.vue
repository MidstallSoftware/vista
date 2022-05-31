<template>
  <div class="items-start justify-start sm:p-1 md:p-4 w-full h-full">
    <div class="card">
      <div class="card-body p-2 sm:p-[1em] space-y-4">
        <h1 class="text-3xl">
          {{ $i18n.t('title') }}
        </h1>

        <p>{{ $i18n.t('description') }}</p>

        <i18n-t keypath="import-path" tag="b">
          <code>/runtime/composables/layout.{cjs,mjs,d.ts}</code>
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
    name: 'useLayoutOptions(name, defopts)',
    arguments: 'string, LayoutOptions',
    type: 'ComputedRef<LayoutOptions>',
    description: $i18n.t('exports.use-layout-options'),
  },
])

definePageMeta({
  title: 'page.docs.composables.layout',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageDocsComposablesLayout',
}
</script>
<i18n>
{
    "en": {
        "title": "Layout",
        "description": "Layout related functions.",
        "exports": {
            "use-layout-options": "Returns a computed version of the layout options."
        }
    }
}
</i18n>
