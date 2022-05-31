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
  {
    name: 'refs',
    type: 'Record<string, Ref<any>>',
    description: $i18n.t('types.refs'),
  },
  {
    name: 'cookies',
    type: 'Record<string, CookieRef<any>>',
    description: $i18n.t('types.cookies'),
  },
  {
    name: 'computed',
    type: 'Record<string, ComputedRef<any>>',
    description: $i18n.t('types.computed'),
  },
])

definePageMeta({
  title: 'VistaBaseInstance',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageDocsTypesVistaBaseInstance',
}
</script>
<i18n>
{
    "en": {
        "title": "VistaBaseInstance",
        "description": "An interface for the properties of the Vista instance.",
        "types": {
            "refs": "A record of references used by Vista.",
            "cookies": "A record of cookies used by Vista.",
            "computed": "A record of computed types used by Vista."
        }
    }
}
</i18n>
