<template>
  <li v-if="listEntry && 'children' in link" tabindex="0">
    <span>
      <mdi-svg v-if="link.icon">{{ link.icon }}</mdi-svg>
      {{
        link.title &&
        (typeof link.title === 'string'
          ? link.title
          : useI18n({ useScope: link.title.scope || 'global' }).t(
              link.title.key,
              link.title.options
            ))
      }}
    </span>

    <div>
      <vs-nav-menu rounded :links="link.children" />
    </div>
  </li>
  <li v-else-if="listEntry && 'url' in link">
    <vs-nav-button :link="link" />
  </li>
  <a v-else :class="[active ? 'active' : undefined]" :href="link.url">
    <mdi-svg v-if="link.icon">{{ link.icon }}</mdi-svg>

    <span v-if="link.title">
      {{
        typeof link.title === 'string'
          ? link.title
          : useI18n({ useScope: link.title.scope || 'global' }).t(
              link.title.key,
              link.title.options
            )
      }}
    </span>
  </a>
</template>
<script setup lang="ts">
import { useRouter } from '#app'
import { computed } from 'vue'
import { useI18n } from '../composables/vista'
import { Link } from '../../types'

const router = useRouter()
const { listEntry, link } = defineProps<{ listEntry?: boolean; link: Link }>()

const active = computed(
  () => 'url' in link && router.currentRoute.value.path === link.url
)
</script>
