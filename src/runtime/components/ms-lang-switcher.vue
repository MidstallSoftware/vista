<template>
  <v-select
    v-model="locale"
    :items="locales"
    prepend-icon="mdi-translate"
    single-line
    hide-details
  />
</template>
<script setup lang="ts">
/* eslint @typescript-eslint/no-unused-vars: "warn" */
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

interface LocaleEntry {
  title: string
  value: string
}

const $i18n = useI18n({ useScope: 'global' })

const locales: LocaleEntry[] = $i18n.availableLocales.map((value) => ({
  value,
  title: {
    en: 'English',
    ja: '日本語',
  }[value],
}))

const locale = ref(locales[$i18n.locale.value])
const modelValue = computed({
  get: () => locale.value.value,
  set: (value) => (locale.value = locales.find((item) => item.value === value)),
})
</script>
