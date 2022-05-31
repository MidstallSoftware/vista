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
              <pre><code>&lt;<span class="text-error">vs-nav-button</span> <span class="text-primary-content">:link</span><span class="text-info">=</span><span class="text-success">"link"</span> /&gt;</code></pre>
              <pre><code>...</code></pre>
              <pre><code>&lt;<span class="text-error">script</span> setup&gt;</code></pre>
              <pre><code>const link = { url: '/', title: 'Hello' }</code></pre>
              <pre><code>&lt;<span class="text-error">/script</span>&gt;</code></pre>
            </div>
          </template>

          <vs-nav-button :link="link" />
        </doc-tabbed>

        <a id="props" href="#props" class="text-3xl hover:underline">
          <span class="text-accent">#</span> {{ $i18n.t('prop-title') }}
        </a>

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
  { name: 'link', type: 'Link', description: $i18n.t('props.link') },
  {
    name: 'list-entry',
    type: 'boolean',
    description: $i18n.t('props.list-entry'),
  },
])

const link = { url: '/', title: 'Hello' }

definePageMeta({
  title: 'page.docs.components.nav-button',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<i18n>
{
    "en": {
        "title": "Navigation Button",
        "description": "A component of the navigation building system. This is a base type which renders buttons, links, and list entries.",
        "props": {
            "link": "A link object which describes what the link is.",
            "list-entry": "Add this to render the button as a list entry."
        }
    }
}
</i18n>
