<template>
  <div class="dropdown">
    <label :tabindex="tabindex" class="btn btn-ghost rounded-btn">
      <mdi-svg>{{ mdiTranslate }}</mdi-svg>
    </label>
    <ul
      :tabindex="tabindex"
      class="dropdown-content menu p-2 shadow bg-primary rounded-box w-52 mt-4"
    >
      <li v-for="(lang, i) in langs" :key="i">
        <button
          :class="[$vista.cookies.locale.value === lang ? 'active' : undefined]"
          @click="switchLang(lang)"
        >
          {{ langName[lang] || lang }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { mdiTranslate } from '@mdi/js'
import { computed, WritableComputedRef } from 'vue'
import { listLanguages } from '../composables/accessibility'
import { useVista } from '../composables/vista'
import { inject } from '#imports'

const $vista = useVista()
const langs = computed(() => listLanguages())
const { tabindex } = defineProps<{ tabindex: string }>()
const locale: WritableComputedRef<string> = inject('vista.locale')

const langName = {
  en: 'English',
  ja: '日本語',
}

const switchLang = (value: string) => {
  $vista.cookies.locale.value = value
  locale.value = value
}
</script>
<i18n>
{
  "en": {
    "theme": {
      "retro": "Retro",
      "night": "Tokyo Night",
      "night-storm": "Tokyo Night Storm",
      "night-light": "Tokyo Night Light"
    }
  },
  "ja": {
    "theme": {
      "night": "東京の夜",
      "night-storm": "東京ナイトストーム",
      "night-light": "東京ナイトライト"
    }
  }
}
</i18n>
