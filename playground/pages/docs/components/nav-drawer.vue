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
              <pre><code>&lt;<span class="text-error">vs-nav-drawer</span> <span class="text-primary-content">id</span><span class="text-info">=</span><span class="text-success">"example-drawer"</span>&gt;</code></pre>
              <pre><code>   &lt;<span class="text-error">label</span> <span class="text-primary-content">for</span><span class="text-info">=</span><span class="text-success">"example-drawer"</span> <span class="text-primary-content">class</span><span class="text-info">=</span><span class="text-success">"btn btn-primary drawer-button"</span>&gt;Open drawer&lt;/<span class="text-error">label</span>&gt;</code></pre>
              <pre><code>&lt;<span class="text-error">/vs-nav-drawer</span>&gt;</code></pre>
            </div>
          </template>

          <vs-nav-drawer id="example-drawer">
            <label for="example-drawer" class="btn btn-primary drawer-button"
              >Open drawer</label
            >
          </vs-nav-drawer>
        </doc-tabbed>

        <a id="props" href="#props" class="text-3xl hover:underline">
          <span class="text-accent">#</span> {{ $i18n.t('prop-title') }}
        </a>

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
    name: 'center',
    type: 'boolean',
    description: $i18n.t('props.center'),
  },
  {
    name: 'id',
    type: 'string',
    description: $i18n.t('props.id'),
  },
])

definePageMeta({
  title: 'page.docs.components.nav-drawer',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<i18n>
{
    "en": {
        "title": "Navigation Drawer",
        "description": "A drawer is sidebar which can show or hide.",
        "props": {
            "center": "Centers the page content.",
            "id": "The ID of the drawer, must be unqiue per page to not cause conflicts."
        }
    }
}
</i18n>
