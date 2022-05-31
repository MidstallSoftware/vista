<template>
  <div>
    <div class="tabs">
      <button
        :class="['tab', tab === 0 ? 'tab-active' : undefined]"
        @click="tab = 0"
      >
        {{ $i18n.t('preview') }}
      </button>
      <button
        :class="['tab', tab === 1 ? 'tab-active' : undefined]"
        @click="tab = 1"
      >
        {{ $i18n.t('code') }}
      </button>
    </div>
    <div
      class="artboard artboard-demo artboard-horizontal phone-1 min-w-full bg-base-300"
    >
      <slot v-if="tab === 0" />
      <div
        v-else-if="tab === 1"
        class="mockup-code min-w-full min-h-full bg-base-200"
      >
        <pre><code><slot name="code" /></code></pre>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../../dist/runtime/composables/vista'

const tab = ref(0)
const $i18n = useI18n()
</script>
<i18n>
{
    "en": {
        "preview": "Preview",
        "code": "Code"
    }
}
</i18n>
