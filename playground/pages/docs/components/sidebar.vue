<template>
  <div class="items-start justify-start sm:p-1 md:p-4 w-full h-full">
    <div class="card">
      <div class="card-body p-2 sm:p-[1em] space-y-4">
        <h1 class="text-3xl">
          {{ $i18n.t('title') }}
        </h1>

        <p>{{ $i18n.t('description') }}</p>

        <doc-tabbed>
          <template #code>
            <div>
              <pre><code>&lt;<span class="text-error">vs-sidebar</span> <span class="text-primary-content">id</span><span class="text-info">=</span><span class="text-success">"example-sidemenu"</span> <span class="text-primary-content">:links</span><span class="text-info">=</span><span class="text-success">"link"</span> /&gt;</code></pre>
              <pre><code>&lt;<span class="text-error">script</span> setup&gt;</code></pre>
              <pre><code>const links = {{ JSON.stringify(links) }}</code></pre>
              <pre><code>&lt;<span class="text-error">/script</span>&gt;</code></pre>
            </div>
          </template>

          <vs-sidebar id="example-sidemenu" :links="links" />
        </doc-tabbed>

        <a id="props" href="#props" class="text-3xl hover:underline">
          <span class="text-accent">#</span> {{ $i18n.t('prop-title') }}
        </a>
        <prop-table :props="props">
          <prop-links />
        </prop-table>

        <a id="slots" href="#slots" class="text-3xl hover:underline">
          <span class="text-accent">#</span> {{ $i18n.t('slot-title') }}
        </a>
        <slot-table :slots="slots" />
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
  { name: 'id', type: 'string', description: $i18n.t('props.id') },
  { name: 'center', type: 'boolean?', description: $i18n.t('props.center') },
])

const slots = computed(() => [
  { name: 'default', description: $i18n.t('slots.default') },
  { name: 'side-top', description: $i18n.t('slots.side-top') },
  { name: 'side', description: $i18n.t('slots.side') },
])

const links = new Array(3)
  .fill(0)
  .map((_v, i) => ({ url: '#', title: `Link ${i + 1}` }))

definePageMeta({
  title: 'page.docs.components.sidebar',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageDocsComponentSidebar',
}
</script>
<i18n>
{
  "en": {
    "title": "Sidebar",
    "description": "A sidemenu based navigation, hides the menu on mobile.",
    "props": {
      "id": "The ID of the menu.",
      "center": "Centers the content."
    },
    "slots": {
      "side-top": "Adds elements into the side menu, above the navigation menu.",
      "side": "Puts elements into the navigation menu."
    }
  }
}
</i18n>
