<template>
  <v-app :theme="theme">
    <ms-nav>
      <template #navbar-right>
        <ms-lang-switcher v-model="locale" anchor="start" menu />
        <ms-theme-switcher v-model="theme" anchor="start" menu />
      </template>
    </ms-nav>

    <v-main> </v-main>

    <ms-footer bottom fixed kind="social">
      <ms-lang-switcher v-model="locale" class="mx-4" anchor="top" menu />
      <ms-theme-switcher v-model="theme" class="mx-4" anchor="top" menu />
    </ms-footer>
  </v-app>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
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
