<template>
  <div class="items-start justify-start sm:p-1 md:p-4 w-full h-full">
    <div class="card">
      <div class="card-body p-2 sm:p-[1em] space-y-4">
        <h1 class="text-3xl">
          {{ $i18n.t('title') }}
        </h1>

        <p>{{ $i18n.t('description') }}</p>

        <code>
          export type LinkCollection =
          <type-label value="Record<string, Link> | Link[]" />
        </code>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from '../../../../dist/runtime/composables/vista'
import { definePageMeta } from '#imports'

const $i18n = useI18n()

definePageMeta({
  title: 'LinkCollection',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageDocsTypesLinkCollection',
}
</script>
<i18n>
{
    "en": {
        "title": "LinkCollection",
        "description": "A type which represents a collection of links."
    }
}
</i18n>
