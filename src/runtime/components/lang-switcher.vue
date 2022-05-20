<template>
  <div v-if="menu">
    <v-menu :anchor="anchor">
      <template #activator="{ props }">
        <v-btn v-bind="props" icon="mdi-translate" />
      </template>

      <v-list>
        <v-list-item
          v-for="(l, i) in locales"
          :key="i"
          :value="l.value"
          @click="switchLang(l.value)"
        >
          <v-list-item-title>{{ l.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
  <v-select
    v-else
    v-model="locale"
    :items="locales"
    prepend-icon="mdi-translate"
    single-line
  />
</template>
<script setup lang="ts">
/* eslint @typescript-eslint/no-unused-vars: "warn" */
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface LocaleEntry {
  title: string
  value: string
}

const $i18n = useI18n({ useScope: 'global' })

const { menu, anchor } = defineProps<{ menu?: boolean; anchor?: string }>()
const emit = defineEmits(['update:modelValue'])

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

const switchLang = (key: string) => {
  modelValue.value = key
  emit('update:modelValue', key)
}
</script>
