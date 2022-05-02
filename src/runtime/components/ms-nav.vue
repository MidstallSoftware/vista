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

      <slot name="navbar-prepend" />
      <template #append>
        <slot />
        <slot name="navbar-append" />
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <slot name="drawer" />
      <slot />
      <template #append>
        <slot name="drawer-append" />
      </template>
    </v-navigation-drawer>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

const { $vista } = useNuxtApp()

const drawer = ref(false)

const websiteName = computed(() => $vista().getWebsiteName())
</script>
