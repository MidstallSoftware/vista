<template>
  <tr>
    <th><code>links</code></th>
    <th>
      <code><type-label value="LinkCollection?" /></code>
    </th>
    <i18n-t keypath="description" tag="th" for="ref">
      <a href="/docs/types/link-collection" class="text-info hover:underline"
        ><code>{{ $i18n.t('ref') }}</code></a
      >
    </i18n-t>
  </tr>
</template>
<script setup lang="ts">
import { useI18n } from '../../dist/runtime/composables/vista'

const $i18n = useI18n()
</script>
<i18n>
{
    "en": {
        "ref": "LinkCollection",
        "description": "Adds a collection of links, see {0} for more information."
    }
}
</i18n>
