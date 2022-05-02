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
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { LinkCollection } from '../../src/types'

const { $vista } = useNuxtApp()
const vista = $vista()
const $i18n = useI18n({ useScope: 'global' })

const links: LinkCollection = [
  { url: '/', icon: 'mdi-home', title: { key: 'page.home' } },
]

const theme = computed({
  get: () => vista.cookies.theme.value,
  set: (value) => (vista.cookies.theme.value = value),
})

const locale = computed({
  get: () => vista.cookies.locale.value,
  set: (value) => {
    vista.cookies.locale.value = value
    $i18n.locale.value = value
  },
})

vista.defineHead()
</script>
<script lang="ts">
export default {
  name: 'LayoutDefault',
}
</script>
