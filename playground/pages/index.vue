<template>
  <div>
    <div class="hero min-h-[32rem] bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">{{ $i18n.t('hero.title') }}</h1>
          <p class="py-6">{{ $i18n.t('hero.text') }}</p>
          <a
            href="/docs/#getting-started"
            class="btn btn-primary justify-end"
            >{{ $i18n.t('get-started') }}</a
          >
        </div>
      </div>
    </div>
    <div class="justify-center py-8 px-8 h-fit w-full">
      <div
        class="grid gap-y-4 sm:grid-rows-3 sm:grid-flow-row md:grid-rows-1 md:grid-flow-col md:gap-4"
      >
        <div v-for="i in 3" :key="i" class="card bg-primary">
          <div class="card-body">
            <h2 class="card-title">{{ $i18n.t(`card${i}.title`) }}</h2>
            <p>{{ $i18n.t(`card${i}.text`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from '../../dist/runtime/composables/vista'
import { definePageMeta } from '#imports'

const $i18n = useI18n()

definePageMeta({
  title: 'page.home',
  layout: 'vs-default',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageIndex',
}
</script>
<i18n>
{
  "en": {
    "get-started": "Get Started",
    "hero": {
      "title": "Introducting Vista",
      "text": "Vista is a library for Nuxt 3 which makes web development with Tailwindcss easier on Nuxt 3."
    },
    "card1": {
      "title": "Flexible",
      "text": "Vista is designed with Tailwind and uses DaisyUI, this allows for a fluent but flexible modern user interface."
    },
    "card2": {
      "title": "Customizable",
      "text": "Vista comes with the three Tokyo Night colorschemes plus DaisyUI's built in themes."
    },
    "card3": {
      "title": "Modern",
      "text": "Vista is built as a module for Nuxt 3.0, it comes with TypeScript definitions."
    }
  }
}
</i18n>
