<template>
  <div>
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon
          v-if="$vuetify.display.mobile"
          @click="drawer = !drawer"
        />
      </template>

      <v-app-bar-title>{{ websiteName }}</v-app-bar-title>

      <slot name="navbar-left" />
      <template #append>
        <slot name="navbar-right" />
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <slot name="drawer" />
    </v-navigation-drawer>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import optionsLoader from '#build/midstall.vista.options.mjs'

const $i18n = useI18n()

const drawer = ref(false)

const websiteName = computed(() => {
  const { branding } = optionsLoader()
  return $i18n.t(branding.kind === 'product' ? 'product.name' : 'company.name')
})
</script>
