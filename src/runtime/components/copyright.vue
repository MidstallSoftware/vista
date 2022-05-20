<template>
  <p>
    &copy; {{ date }} -
    <span v-if="kind === 'product'">
      <i18n-t keypath="product.copyright" tag="span" :i18n="$i18n">
        <template #product>
          <strong>{{ $i18n.t('product.name') }}</strong>
        </template>
        <template #owner>
          <strong>{{ $i18n.t('company.name') }}</strong>
        </template>
      </i18n-t>
      <i18n-t
        v-if="typeof license === 'string'"
        keypath="product.licensed"
        tag="span"
        :i18n="$i18n"
      >
        <template #product>
          <strong>{{ $i18n.t('product.name') }}</strong>
        </template>
        <template #license>
          <i>{{ license }}</i>
        </template>
      </i18n-t>
    </span>
    <strong v-else-if="kind === 'company'">{{
      $i18n.t('company.name')
    }}</strong>
    <strong v-else>{{ $i18n.t('website.name') }}</strong>
  </p>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { branding } from '#midstallsw-vista-options'

const $i18n = useI18n()

const kind = computed(() => branding.kind)
const date = computed(() => new Date().getFullYear())
const license = computed(() => branding.license)
</script>
<script lang="ts">
export default {
  name: 'VSCopyright',
}
</script>
<i18n>
{
  "en": {
    "product": {
      "copyright": "{product} is a product of {owner}. ",
      "licensed": "{product} is licensed under {license}. "
    }
  },
  "ja": {
    "product": {
      "copyright": "{product}は{owner}の製品です。",
      "licensed": "{product}は{license}でライセンスされています。"
    }
  }
}
</i18n>
