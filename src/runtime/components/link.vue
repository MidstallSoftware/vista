<template>
  <v-list-item
    v-if="link !== null && 'url' in link && list"
    active-color="primary"
    :prepend-icon="link.icon"
    :href="link.url"
  >
    {{ link.title }}
  </v-list-item>
  <v-btn
    v-else-if="link !== null && !list && 'url' in link && !iconsOnly"
    :prepend-icon="link.icon"
    :href="link.url"
  >
    <span v-if="typeof link.title === 'string'" v-text="link.title" />
  </v-btn>
  <v-btn
    v-else-if="
      link !== null && !list && 'url' in link && 'icon' in link && iconsOnly
    "
    :href="link.url"
    :icon="link.icon"
  />
  <v-list-group v-else-if="link !== null && list && 'children' in link">
    <template #activator="{ props }">
      <v-list-item
        v-bind="props"
        :title="list.title"
        :prepend-icon="list.icon"
      />
    </template>

    <vs-link v-for="(l, i) in link.children" :key="i" :value="l" list />
  </v-list-group>
  <v-list
    v-else-if="link === null && list && Array.isArray(links)"
    nav
    density="compact"
  >
    <vs-link v-for="(l, i) in links" :key="i" :value="l" list />
  </v-list>
  <v-menu v-else-if="link !== null && 'children' in link">
    <template #activator="{ props }">
      <v-btn v-if="iconsOnly" v-bind="props" :icon="link.icon" />
      <v-btn v-else v-bind="props" :prepend-icon="link.icon">
        {{ link.title }}
      </v-btn>
    </template>

    <vs-link :value="link.children" :icons-only="iconsOnly" list />
  </v-menu>
  <div v-else>
    <vs-link
      v-for="(l, i) in links"
      :key="i"
      :value="l"
      :icons-only="iconsOnly"
    />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type {
  BasicLink,
  BetterString,
  Link,
  LinkGroup,
  LinkCollection,
} from '../../types'

const transformString: (str: BetterString) => string = (str) => {
  if (typeof str === 'string') return str
  if (typeof str === 'object')
    return useI18n({ useScope: str.scope || 'parent' }).t(str.key, str.options)
  return null
}

const transformLink: (value: Link) => Link = (value) => {
  if (typeof (value as any).url !== 'string') {
    const group = value as LinkGroup
    return {
      title: transformString(group.title),
      icon: group.icon,
      children: transformCollection(group.children || []),
    } as LinkGroup
  }

  const link = value as BasicLink
  return {
    title: transformString(link.title),
    icon: link.icon,
    url: link.url,
  } as BasicLink
}

const transformCollection: (value: LinkCollection) => LinkCollection = (
  value
) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, link]) => [key, transformLink(link)])
    )
  }

  return value.map((link) => transformLink(link))
}

const { value, list, iconsOnly } = defineProps<{
  value: LinkCollection | Link
  list?: boolean
  iconsOnly?: boolean
}>()

const links = computed(() => {
  if (typeof value === 'object') {
    if (Array.isArray(value)) return transformCollection(value)

    if (
      Object.keys(value).filter(
        (v) => !['url', 'title', 'icon', 'children'].includes(v)
      ).length === Object.keys(value).length
    )
      return transformCollection(value as LinkCollection)
  }
  return []
})

const link = computed(() => {
  if (
    typeof value === 'object' &&
    Object.keys(value).filter((v) => ['url', 'title', 'icon'].includes(v))
      .length === Object.keys(value).length
  ) {
    return transformLink(value as Link)
  }
  return null
})
</script>
<script lang="ts">
export default {
  name: 'VSLink',
}
</script>
