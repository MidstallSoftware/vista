<template>
  <v-app :theme="theme">
    <vs-nav>
      <template v-if="!$vuetify.display.mobile" #navbar-append>
        <vs-link :value="links" icons-only />

        <vs-lang-switcher v-model="locale" anchor="start" menu />
        <vs-theme-switcher v-model="theme" anchor="start" menu />
      </template>

      <template v-if="$vuetify.display.mobile" #drawer>
        <vs-link :value="links" list />
      </template>

      <template v-if="$vuetify.display.mobile" #drawer-append>
        <v-btn-group>
          <vs-lang-switcher v-model="locale" anchor="top" menu />
          <vs-theme-switcher v-model="theme" anchor="top" menu />
        </v-btn-group>
      </template>
    </vs-nav>

    <vs-main>
      <NuxtPage />
    </vs-main>

    <vs-footer bottom fixed kind="social">
      <vs-lang-switcher v-model="locale" class="mx-4" anchor="top" menu />
      <vs-theme-switcher v-model="theme" class="mx-4" anchor="top" menu />
    </vs-footer>
  </v-app>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { LinkCollection } from '../../types'
import optionsLoader from '#build/midstall.vista.options.mjs'

const $vista = useVista()
const $i18n = useI18n({ useScope: 'global' })

const links = computed<LinkCollection>(
  () => optionsLoader().layouts.default.links
)

const theme = computed({
  get: () => $vista.cookies.theme.value,
  set: (value) => ($vista.cookies.theme.value = value),
})

const locale = computed({
  get: () => $vista.cookies.locale.value,
  set: (value) => {
    $vista.cookies.locale.value = value
    $i18n.locale.value = value
  },
})

$vista.defineHead()
</script>
<script lang="ts">
export default {
  name: 'LayoutDefault',
}
</script>
