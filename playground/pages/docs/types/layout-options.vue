<template>
  <div class="items-start justify-start sm:p-1 md:p-4 w-full h-full">
    <div class="card">
      <div class="card-body p-2 sm:p-[1em] space-y-4">
        <h1 class="text-3xl">
          {{ $i18n.t('title') }}
        </h1>

        <p>{{ $i18n.t('description') }}</p>

        <prop-table :props="props">
          <prop-links />
        </prop-table>
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
  {
    name: 'navbar',
    type: 'false | NavbarKind?',
    description: $i18n.t('types.navbar'),
  },
  { name: 'center', type: 'boolean?', description: $i18n.t('types.center') },
])

definePageMeta({
  title: 'LayoutOptions',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageDocsTypesLayoutOptions',
}
</script>
<i18n>
{
    "en": {
        "title": "LayoutOptions",
        "description": "An interface which dictates how a layout should generally function.",
        "types": {
            "navbar": "False to remove the navbar, sets the particular style of the navbar.",
            "center": "Set this to determine whether or not to center the content."
        }
    }
}
</i18n>
