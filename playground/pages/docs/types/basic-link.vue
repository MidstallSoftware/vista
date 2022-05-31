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
  { name: 'url', type: 'string', description: $i18n.t('types.url') },
  { name: 'icon', type: 'string?', description: $i18n.t('types.icon') },
  { name: 'side', type: 'string[]?', description: $i18n.t('types.side') },
  { name: 'title', type: 'BetterString?', description: $i18n.t('types.title') },
])

definePageMeta({
  title: 'BasicLink',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageDocsTypesBasicLink',
}
</script>
<i18n>
{
    "en": {
        "title": "BasicLink",
        "description": "An interface which simply represents a link.",
        "types": {
            "url": "The URL of the link.",
            "icon": "The Material Design JS icon to use.",
            "side": "The side to put the link on.",
            "title": "The title to set the link to."
        }
    }
}
</i18n>
