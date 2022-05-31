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
            &lt;<span class="text-error">vs-nav-bar</span> /&gt;
          </template>

          <vs-nav-bar />
        </doc-tabbed>

        <a id="props" href="#props" class="text-3xl hover:underline">
          <span class="text-accent">#</span> {{ $i18n.t('prop-title') }}
        </a>

        <prop-table :props="props">
          <prop-links />
          <prop-kind />
          <prop-css
            name="menu-class"
            :description="$i18n.t('props.menu-class')"
          />
          <prop-css
            name="switcher-class"
            :description="$i18n.t('props.switcher-class')"
          />
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
  { name: 'title', type: 'string', description: $i18n.t('props.title') },
])

const slots = computed(() => [
  { name: 'default', description: $i18n.t('slots.default') },
  { name: 'menu', description: $i18n.t('slots.menu') },
])

definePageMeta({
  title: 'page.docs.components.nav-bar',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<i18n>
{
    "en": {
        "title": "Navigation Bar",
        "description": "The language switch is a dropdown menu button which allows for switching between the available languages.",
        "props": {
          "title": "The title to add to the navigation bar, defaults to the website title.",
          "menu-class": "Sets the classes to add to the menu(s).",
          "switcher-class": "Sets the classes to add to the language and theme switchers."
        },
        "slots": {
          "menu": "Places elements at where the menu button goes."
        }
    }
}
</i18n>
