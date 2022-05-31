<template>
  <div class="items-start justify-start sm:p-1 md:p-4 w-full h-full">
    <div class="card">
      <div class="card-body p-2 sm:p-[1em] space-y-4">
        <h1 class="text-3xl">
          {{ $i18n.t('title') }}
        </h1>

        <p>{{ $i18n.t('description') }}</p>

        <code>
          export type BrandKind =
          <type-label value="'company' | 'product' | 'personal'" />
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
  title: 'BrandKind',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageDocsTypesBrandKind',
}
</script>
<i18n>
{
    "en": {
        "title": "BrandKind",
        "description": "A type which represents a particular branding style."
    }
}
</i18n>
