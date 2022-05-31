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
            &lt;<span class="text-error">vs-theme-switch</span>
            <span class="text-primary-content"> tabindex</span
            ><span class="text-info">=</span
            ><span class="text-success">"3"</span> /&gt;
          </template>

          <vs-theme-switch tabindex="3" />
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
  { name: 'tabindex', type: 'string?', description: $i18n.t('props.tabindex') },
])

definePageMeta({
  title: 'page.docs.components.theme-switch',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<i18n>
{
    "en": {
        "title": "Theme Switch",
        "description": "The theme switch is a dropdown menu button which allows for switching between the available themes.",
        "props": {
            "tabindex": "A required property that must be set to a stringified number. Without it, the menu will not open."
        }
    }
}
</i18n>
