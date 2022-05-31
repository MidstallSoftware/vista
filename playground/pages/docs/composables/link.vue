<template>
  <div class="items-start justify-start sm:p-1 md:p-4 w-full h-full">
    <div class="card">
      <div class="card-body p-2 sm:p-[1em] space-y-4">
        <h1 class="text-3xl">
          {{ $i18n.t('title') }}
        </h1>

        <p>{{ $i18n.t('description') }}</p>

        <i18n-t keypath="import-path" tag="b">
          <code>/runtime/composables/link.{cjs,mjs,d.ts}</code>
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
    name: 'generateLinkSides(links)',
    arguments: 'LinkCollection',
    type: 'Record<string, Link[]>',
    description: $i18n.t('exports.generate-link-sides'),
  },
  {
    name: 'combineLinkCollection(a, b)',
    arguments: 'LinkCollection?, LinkCollection?',
    type: 'LinkCollection',
    description: $i18n.t('exports.combine-link-collection'),
  },
])

definePageMeta({
  title: 'page.docs.composables.link',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageDocsComposablesLink',
}
</script>
<i18n>
{
    "en": {
        "title": "Link",
        "description": "Link related functions.",
        "exports": {
            "generate-link-sides": "Organizes each link in the collection to the correct \"side\".",
            "combine-link-collection": "Combines two link collections, checks if they're not defined as well."
        }
    }
}
</i18n>
