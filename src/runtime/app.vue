<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useRoute, useHead } from '#app'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useVista } from './composables/vista'

const $vista = useVista()

const $i18n = useI18n({ useScope: 'global' })
const route = useRoute()

const title = computed(() => {
  if (typeof route.meta.title !== 'string') return ''

  const s = route.meta.title.split(' - ')
  s[0] = $i18n.t(s[0])
  return s.join(' - ')
})

useHead({
  titleTemplate: `%s - ${$vista.getWebsiteName()}`,
})
</script>
