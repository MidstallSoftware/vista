<template>
  <v-card>
    <v-card-title>{{ $i18n.t('card.title') }}</v-card-title>
    <v-card-text>{{ $i18n.t('card.text') }}</v-card-text>
  </v-card>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const $i18n = useI18n()
</script>
<script>
export default {
  name: 'PageIndex',
}
</script>
<i18n>
{
  "en": {
    "card": {
      "title": "Introducting Vista",
      "text": "Vista is a library for Nuxt 3 which makes web development with Vuetify easier on Nuxt 3."
    }
  }
}
</i18n>
