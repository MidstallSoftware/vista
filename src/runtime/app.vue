<template>
  <div>
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <NuxtLayout />
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'

const $vista = useVista()

const $i18n = useI18n({ useScope: 'global' })
const route = useRoute()

const title = computed(() => {
  const s = route.meta.title.split(' - ')
  s[0] = $i18n.t(s[0])
  return s.join(' - ')
})

useHead({
  titleTemplate: `%s - ${$vista.getWebsiteName()}`,
})
</script>
