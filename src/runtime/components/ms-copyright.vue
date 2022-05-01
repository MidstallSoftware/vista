<template>
  <p>
    {{ date }} -
    <span v-if="kind === 'product'">{{
      $i18n.t('product.copyright', {
        product: entity,
        owner: $i18n.t('company.name'),
      })
    }}</span>
    <strong v-else>{{ entity }}</strong>
  </p>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { format } from 'date-fns'
import { useI18n } from 'vue-i18n'
import type { Composer } from 'vue-i18n'
import optionsLoader from '#build/midstall.vista.options.mjs'

const $i18n = useI18n()

const kind = computed(() => optionsLoader().branding.kind)

const {
  format: formatString = 'yyyy',
  entity: entityFactory = (i18n) => {
    const { kind } = optionsLoader().branding
    return i18n.t(`${kind}.name`)
  },
} = defineProps<{
  format?: string
  entity?: string | ((i18n: Composer) => string)
}>()

const date = computed(() => format(new Date(), formatString))
const entity = computed(() =>
  typeof entityFactory === 'string' ? entityFactory : entityFactory($i18n)
)
</script>
<i18n>
{
  "en": {
    "product": {
      "copyright": "{product} is a product of {owner}"
    }
  }
}
</i18n>
