<template>
  <div class="items-start justify-start sm:p-1 md:p-4 w-full h-full">
    <div class="card">
      <div class="card-body p-2 sm:p-[1em] space-y-4">
        <h1 class="text-3xl">
          {{ $i18n.t('title') }}
        </h1>

        <p>{{ $i18n.t('description') }}</p>

        <i18n-t keypath="extend-type" tag="b">
          <type-label value="VistaBaseInstance" />
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
    name: 'getWebsiteName()',
    type: 'string',
    description: $i18n.t('types.get-website-name'),
  },
  {
    name: 'defineHead()',
    type: 'void',
    description: $i18n.t('types.define-head'),
  },
])

definePageMeta({
  title: 'VistaInstance',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageDocsTypesVistaInstance',
}
</script>
<i18n>
{
    "en": {
        "title": "VistaInstance",
        "description": "An interface for the methods of the Vista instance.",
        "types": {
            "get-website-name": "Returns the translated website name.",
            "define-head": "Autogenerate the correct head information."
        }
    }
}
</i18n>
