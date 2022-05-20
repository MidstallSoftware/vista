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
      <v-card>
        <v-card-title v-text="errorName" />
        <v-card-text>
          <p v-text="errorMessage" />
          <p v-if="statusCode === '500'" v-text="error.message" />
          <div v-if="'description' in error" v-html="error.description" />
        </v-card-text>
        <v-card-actions>
          <v-btn href="/">{{ $i18n.t('back-to-home') }}</v-btn>
        </v-card-actions>
      </v-card>
    </vs-main>

    <vs-footer bottom fixed :kind="branding.kind">
      <vs-lang-switcher v-model="locale" class="mx-4" anchor="top" menu />
      <vs-theme-switcher v-model="theme" class="mx-4" anchor="top" menu />
    </vs-footer>
  </v-app>
</template>
<script setup lang="ts">
import { useHead } from '#app'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { LinkCollection } from '../types'
import { useVista } from './composables/vista'
import { layouts, branding } from '#midstallsw-vista-options'

const $vista = useVista()
const $i18n = useI18n({ missingWarn: false })

const { error } = defineProps<{ error: { statusCode: number; url: string } }>()

const statusCode = String('statusCode' in error ? error.statusCode : 500)

const links = computed<LinkCollection>(() => layouts.default.links)

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

const tryI18n = (key: string, def: string, opts?: any) =>
  $i18n.t(key, opts) === key ? $i18n.t(def, opts) : $i18n.t(key, opts)

const errorName = computed(() =>
  tryI18n(`error.name.${statusCode}`, 'error.name.default', {
    ...error,
    statusCode,
  })
)
const errorMessage = computed(() =>
  tryI18n(`error.message.${statusCode}`, 'error.name.default', {
    ...error,
    statusCode,
  })
)

$i18n.locale.value = $vista.computed.locale.value

useHead(
  computed(() => ({
    title: `${errorName.value} - ${$vista.getWebsiteName()}`,
    meta: [
      {
        name: 'og:title',
        content: `${errorName.value} - ${$vista.getWebsiteName()}`,
      },
      { name: 'og:description', content: errorMessage.value },
    ],
  }))
)
</script>
<i18n>
{
  "en": {
    "error": {
      "name": {
        "404": "File Not Found",
        "500": "Internal Server Error",
        "default": "{statusCode} Error"
      },
      "message": {
        "404": "Page not found: {url}",
        "500": "The website has experienced an internal error which has prevented it from loading.",
        "default": "{message}"
      }
    },
    "back-to-home": "Back to home"
  }
}
</i18n>
<script lang="ts">
export default {
  name: 'VsError',
}
</script>
