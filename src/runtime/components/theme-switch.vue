<template>
  <div class="dropdown">
    <label :tabindex="tabindex" class="btn btn-ghost rounded-btn">
      <mdi-svg>{{ mdiBrightness6 }}</mdi-svg>
    </label>
    <ul
      :tabindex="tabindex"
      class="dropdown-content menu p-2 shadow bg-primary rounded-box w-52 mt-4"
    >
      <li v-for="(t, i) in themes" :key="i">
        <button
          :class="[$vista.cookies.theme.value === t ? 'active' : undefined]"
          @click="switchTheme(t)"
        >
          {{ $i18n.t('theme.' + t) }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { mdiBrightness6 } from '@mdi/js'
import { computed, WritableComputedRef } from 'vue'
import { listThemes } from '../composables/accessibility'
import { useVista, useI18n } from '../composables/vista'
import { inject } from '#imports'

const $vista = useVista()
const $i18n = useI18n()
const themes = computed(() => listThemes())
const { tabindex } = defineProps<{ tabindex: string }>()
const theme: WritableComputedRef<string> = inject('vista.theme')

const switchTheme = (value: string) => {
  theme.value = value
  $vista.cookies.theme.value = value
  document.documentElement.dataset.theme = value
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
