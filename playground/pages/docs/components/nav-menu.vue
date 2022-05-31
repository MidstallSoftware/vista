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
              <pre><code>&lt;<span class="text-error">vs-nav-menu</span> <span class="text-primary-content">:links</span><span class="text-info">=</span><span class="text-success">"links"</span> /&gt;</code></pre>
              <pre><code>&lt;<span class="text-error">script</span> setup&gt;</code></pre>
              <pre><code>const links = {{ JSON.stringify(links) }}</code></pre>
              <pre><code>&lt;<span class="text-error">/script</span>&gt;</code></pre>
            </div>
          </template>

          <vs-nav-menu :links="links" />
        </doc-tabbed>

        <h1 class="text-3xl">
          {{ $i18n.t('rounded') }}
        </h1>

        <doc-tabbed>
          <template #code>
            <div>
              <pre><code>&lt;<span class="text-error">vs-nav-menu</span> <span class="text-primary-content">:links</span><span class="text-info">=</span><span class="text-success">"links"</span> <span class="text-primary-content">rounded</span> /&gt;</code></pre>
              <pre><code>&lt;<span class="text-error">script</span> setup&gt;</code></pre>
              <pre><code>const links = {{ JSON.stringify(links) }}</code></pre>
              <pre><code>&lt;<span class="text-error">/script</span>&gt;</code></pre>
            </div>
          </template>

          <vs-nav-menu :links="links" rounded />
        </doc-tabbed>

        <h1 class="text-3xl">
          {{ $i18n.t('submenu') }}
        </h1>

        <doc-tabbed>
          <template #code>
            <div>
              <pre><code>&lt;<span class="text-error">vs-nav-menu</span> <span class="text-primary-content">:links</span><span class="text-info">=</span><span class="text-success">"links"</span> <span class="text-primary-content">submenu</span> /&gt;</code></pre>
              <pre><code>&lt;<span class="text-error">script</span> setup&gt;</code></pre>
              <pre><code>const links = {{ JSON.stringify(links) }}</code></pre>
              <pre><code>&lt;<span class="text-error">/script</span>&gt;</code></pre>
            </div>
          </template>

          <vs-nav-menu :links="links" submenu />
        </doc-tabbed>

        <h1 class="text-3xl">
          {{ $i18n.t('horizontal') }}
        </h1>

        <doc-tabbed>
          <template #code>
            <div>
              <pre><code>&lt;<span class="text-error">vs-nav-menu</span> <span class="text-primary-content">:links</span><span class="text-info">=</span><span class="text-success">"links"</span> <span class="text-primary-content">horizontal</span> /&gt;</code></pre>
              <pre><code>&lt;<span class="text-error">script</span> setup&gt;</code></pre>
              <pre><code>const links = {{ JSON.stringify(links) }}</code></pre>
              <pre><code>&lt;<span class="text-error">/script</span>&gt;</code></pre>
            </div>
          </template>

          <vs-nav-menu :links="links" horizontal />
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
  { name: 'submenu', type: 'boolean?', description: $i18n.t('props.submenu') },
  {
    name: 'horizontal',
    type: 'boolean?',
    description: $i18n.t('props.horizontal'),
  },
  { name: 'rounded', type: 'boolean?', description: $i18n.t('props.rounded') },
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
<i18n>
{
  "en": {
    "title": "Navigation Menu",
    "description": "A component of the navigation building system. This is a base type which renders the list.",
    "rounded": "Rounded",
    "submenu": "Submenu",
    "horizontal": "Horizontal",
    "props": {
      "submenu": "Set this to have it function as a submenu.",
      "horizontal": "Makes the menu horizontal, defaults to false so its verical.",
      "rounded": "Set this to make it rounded"
    }
  }
}
</i18n>
