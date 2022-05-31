<template>
  <div class="items-start justify-start sm:p-1 md:p-4 w-full h-full">
    <div class="card">
      <div class="card-body p-2 sm:p-[1em] space-y-4">
        <h1 id="getting-started" class="text-3xl">
          {{ $i18n.t('page.docs.getting-started') }}
        </h1>

        <p>{{ $i18n.t('getting-started-main.intro') }}</p>
        <p>{{ $i18n.t('getting-started-main.install-nuxt') }}</p>

        <div class="mockup-code bg-base-200 text-primary-content">
          <pre data-prefix="$"><code>npx nuxi init nuxt-app</code></pre>
          <pre data-prefix="$"><code>cd nuxt-app</code></pre>
        </div>

        <p class="m-2">{{ $i18n.t('getting-started-main.install-vista') }}</p>
        <div class="mockup-code bg-base-200 text-primary-content">
          <pre
            data-prefix="$"
          ><code>npm install @midstallsoftware/vista @nuxtjs/color-mode @intlify/nuxt3 @nuxtjs/tailwindcss</code></pre>
        </div>

        <p class="m-2">
          {{ $i18n.t('getting-started-main.configure-nuxt') }}
        </p>
        <div class="mockup-code bg-base-200 text-primary-content">
          <pre data-prefix="nuxt.config.ts" class="p-4">
                          <code>
<span class="text-info">export default</span> <span class="text-accent">defineNuxtConfig</span>({
    modules: ['@midstallsoftware/vista']
})
                          </code>
                      </pre>
        </div>

        <p>{{ $i18n.t('getting-started-main.done') }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from '../../../dist/runtime/composables/vista'
import { definePageMeta } from '#imports'

const $i18n = useI18n()

definePageMeta({
  title: 'page.docs.home',
  layout: 'vs-sidebar',
  layoutOptions: {
    center: false,
  },
})
</script>
<script lang="ts">
export default {
  name: 'PageDocsIndex',
}
</script>
<i18n>
{
    "en": {
        "getting-started-main": {
            "intro": "Vista is a Nuxt 3 module which provides components, layouts, styles, and many more. With this guide, it will help you set up a brand new Nuxt 3 powered website to use Vista.",
            "install-nuxt": "To begin, you want to create a new Nuxt 3 project. If you already have one created then you can skip this step.",
            "install-vista": "With your Nuxt 3 project opened either in a terminal or IDE, you may now install Vista and the required peer dependencies.",
            "configure-nuxt": "Once npm has installed Vista and its peer dependencies, you will need to edit your nuxt configuration",
            "done": "Congratulations, you have now set up Vista for Nuxt 3."
        }
    }
}
</i18n>
