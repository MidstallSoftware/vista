<template>
  <v-row justify="center" align="start" class="pt-4">
    <v-col cols="12" md="10" lg="8" xl="8">
      <v-main>
        <slot />
      </v-main>
    </v-col>
  </v-row>
</template>
<script lang="ts">
export default {
  name: 'VSMain',
}
</script>
