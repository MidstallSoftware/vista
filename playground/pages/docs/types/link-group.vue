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
  { name: 'title', type: 'BetterString?', description: $i18n.t('types.title') },
  { name: 'icon', type: 'string?', description: $i18n.t('types.icon') },
  { name: 'side', type: 'string[]?', description: $i18n.t('types.side') },
  {
    name: 'children',
    type: 'LinkCollection',
    description: $i18n.t('types.children'),
  },
])

definePageMeta({
  title: 'LinkGroup',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageDocsTypesLinkGroup',
}
</script>
<i18n>
{
    "en": {
        "title": "LinkGroup",
        "description": "An interface which represents a grouped section of links.",
        "types": {
            "title": "The title to set the link to.",
            "icon": "The icon from Material Design Icon JS to use.",
            "side": "The side to put the link on.",
            "children": "The children to put in the link"
        }
    }
}
</i18n>
