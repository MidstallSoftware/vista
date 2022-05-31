<template>
  <div :data-theme="theme">
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useHead } from '#app'
import { useI18n } from 'vue-i18n'
import { computed, onMounted } from 'vue'
import { useVista } from './composables/vista'
import { provide } from '#imports'

const $vista = useVista()

const $i18n = useI18n({ useScope: 'global' })
const route = useRoute()

const title = computed(() => {
  if (typeof route.meta.title !== 'string') return ''

  const s = route.meta.title.split(' - ')
  s[0] = $i18n.t(s[0])
  return s.join(' - ')
})

const theme = computed({
  get: () => $vista.cookies.theme.value,
  set: (value) => {
    $vista.cookies.theme.value = value
    document.documentElement.dataset.theme = value
  },
})

const locale = computed({
  get: () => $vista.cookies.locale.value,
  set: (value) => {
    $vista.cookies.locale.value = value
    $i18n.locale = value
    document.documentElement.dataset.lang = value
  },
})

provide(
  'vista.theme',
  computed({
    get: () => theme.value,
    set: (value) => (theme.value = value),
  })
)
provide(
  'vista.locale',
  computed({
    get: () => locale.value,
    set: (value) => (locale.value = value),
  })
)

useHead({
  titleTemplate: `%s - ${$vista.getWebsiteName()}`,
})

onMounted(() => {
  document.documentElement.dataset.theme = theme.value
  document.documentElement.dataset.lang = locale.value
})
</script>
