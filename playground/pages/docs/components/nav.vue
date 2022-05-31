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
              <pre><code>&lt;<span class="text-error">vs-nav</span> <span class="text-primary-content">id</span><span class="text-info">=</span><span class="text-success">"example-nav"</span> <span class="text-primary-content">:links</span><span class="text-info">=</span><span class="text-success">"links"</span> /&gt;</code></pre>
              <pre><code>&lt;<span class="text-error">script</span> setup&gt;</code></pre>
              <pre><code>const links = {{ JSON.stringify(links) }}</code></pre>
              <pre><code>&lt;<span class="text-error">/script</span>&gt;</code></pre>
            </div>
          </template>

          <vs-nav id="example-nav" :links="links" />
        </doc-tabbed>

        <a id="props" href="#props" class="text-3xl hover:underline">
          <span class="text-accent">#</span> {{ $i18n.t('prop-title') }}
        </a>
        <prop-table :props="props">
          <prop-links />
          <prop-kind />
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
])

const slots = computed(() => [
  { name: 'default', description: $i18n.t('slots.default') },
])

const links = new Array(3)
  .fill(0)
  .map((_v, i) => ({ url: '#', title: `Link ${i + 1}` }))

definePageMeta({
  title: 'page.docs.components.nav-menu',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageDocsComponentNav',
}
</script>
<i18n>
{
  "en": {
    "title": "Navigation",
    "description": "A component of the navigation building system. This is for the entire page and is used by the layouts.",
    "props": {
      "id": "The ID of the drawer."
    }
  }
}
</i18n>
