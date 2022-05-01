<template>
  <v-app :theme="theme">
    <v-main>
      <ms-theme-switcher v-model="theme" />
      <ms-lang-switcher v-model="locale" />
    </v-main>

    <ms-footer bottom fixed kind="social" />
  </v-app>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const $i18n = useI18n({ useScope: 'global' })

const theme = useCookie('theme', {
  default: () => ref('night'),
})

const localeRef = ref('en')
const localeCookie = useCookie('locale', {
  default: () => localeRef,
})

const locale = computed({
  get: () => localeCookie.value,
  set: (value) => {
    localeCookie.value = value
    $i18n.locale.value = value
  },
})

$i18n.locale.value = locale.value
</script>
