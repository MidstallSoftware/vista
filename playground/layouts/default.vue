<template>
  <v-app :theme="theme">
    <ms-nav>
      <template v-if="!$vuetify.display.mobile" #navbar-append>
        <ms-link :value="links" icons-only />

        <ms-lang-switcher v-model="locale" anchor="start" menu />
        <ms-theme-switcher v-model="theme" anchor="start" menu />
      </template>

      <template v-if="$vuetify.display.mobile" #drawer>
        <ms-link :value="links" list />
      </template>

      <template v-if="$vuetify.display.mobile" #drawer-append>
        <v-btn-group>
          <ms-lang-switcher v-model="locale" anchor="top" menu />
          <ms-theme-switcher v-model="theme" anchor="top" menu />
        </v-btn-group>
      </template>
    </ms-nav>

    <ms-main>
      <NuxtPage />
    </ms-main>

    <ms-footer bottom fixed kind="social">
      <ms-lang-switcher v-model="locale" class="mx-4" anchor="top" menu />
      <ms-theme-switcher v-model="theme" class="mx-4" anchor="top" menu />
    </ms-footer>
  </v-app>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { LinkCollection } from '../../src/types'

const $i18n = useI18n({ useScope: 'global' })

const theme = useCookie('theme', {
  default: () => ref('night'),
})

const localeRef = ref('en')
const localeCookie = useCookie('locale', {
  default: () => localeRef,
})

const links = [
  { url: '/', icon: 'mdi-home', title: { key: 'page.home' } },
] as LinkCollection

const locale = computed({
  get: () => localeCookie.value,
  set: (value) => {
    localeCookie.value = value
    $i18n.locale.value = value
  },
})

$i18n.locale.value = locale.value
</script>
<script>
export default {
  name: 'LayoutDefault',
}
</script>
