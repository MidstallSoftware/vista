<template>
  <vs-nav-drawer
    :id="id"
    :links="combineLinkCollection(sidedLinks.default, sidedLinks.drawer || [])"
  >
    <div>
      <vs-nav-bar
        v-if="kind !== false"
        :kind="kind"
        :links="
          combineLinkCollection(sidedLinks.default, sidedLinks.navbar || [])
        "
        menu-class="hidden lg:inline-flex"
        switcher-class="hidden lg:inline-flex dropdown-end"
      >
        <template #menu>
          <label :for="id" class="drawer-button btn btn-primary">
            <mdi-svg>{{ mdiMenu }}</mdi-svg>
          </label>
        </template>
      </vs-nav-bar>

      <slot />
    </div>
  </vs-nav-drawer>
</template>
<script setup lang="ts">
import { mdiMenu } from '@mdi/js'
import { generateLinkSides, combineLinkCollection } from '../composables/link'
import { LinkCollection, NavbarKind } from '../../types'

const { links, id, kind } = defineProps<{
  links?: LinkCollection
  id: string
  kind?: NavbarKind | false
}>()

const sidedLinks = generateLinkSides(links)
</script>
<script lang="ts">
export default {
  name: 'VsNav',
}
</script>
