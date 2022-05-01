<template>
  <v-select v-model="theme" :items="items" prepend-icon="mdi-lightbulb" />
</template>
<script setup lang="ts">
/* eslint @typescript-eslint/no-unused-vars: "warn" */
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

interface ThemeEntry {
  title: string
  value: string
}

const $i18n = useI18n()

const makeEntry = (value: string) =>
  ({
    title: $i18n.t(`theme.${value.split('-').join('.')}`),
    value,
  } as ThemeEntry)

const makeEntries = () =>
  ['', '-storm', '-light'].map((key) => makeEntry(`night${key}`))

const items = ref(makeEntries())

watch($i18n.locale, () => {
  items.value = makeEntries()
})

const theme = ref(items[0])
const modelValue = computed({
  get: () => theme.value.value,
  set: (value) =>
    (theme.value = items.value.find((item) => item.value === value)),
})
</script>
<i18n>
{
  "en": {
    "theme.night": "Tokyo Night",
    "theme.night.storm": "Tokyo Night Storm",
    "theme.night.light": "Tokyo Night Light"
  },
  "ja": {
    "theme.night": "東京の夜",
    "theme.night.storm": "東京ナイトストーム",
    "theme.night.light": "東京ナイトライト"
  }
}
</i18n>
