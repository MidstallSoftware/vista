<template>
  <tr>
    <th>
      <code>{{ name }}</code>
    </th>
    <th>
      <code
        ><type-label value="string | string[] | Record<string, boolean>"
      /></code>
    </th>
    <th v-text="description" />
  </tr>
</template>
<script setup lang="ts">
const { name, description } = defineProps<{
  name: string
  description: string
}>()
</script>
