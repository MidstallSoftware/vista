<template>
  <div v-if="kind === 'minimal'" class="navbar bg-primary z-[100]">
    <div class="navbar-start">
      <div class="flex-none sm:visible md:hidden lg:hidden xl:hidden">
        <slot name="menu" />
      </div>
      <vs-nav-menu
        v-if="'left' in sidedLinks"
        :class="menuClass"
        :links="sidedLinks.left"
        horizontal
      />
    </div>
    <div class="navbar-center">
      <vs-nav-menu
        v-if="'center' in sidedLinks"
        :class="menuClass"
        :links="sidedLinks.left"
        horizontal
      />
    </div>
    <div class="navbar-end">
      <vs-nav-menu :class="menuClass" :links="sidedLinks.default" horizontal />
      <vs-nav-menu
        v-if="'right' in sidedLinks"
        :class="menuClass"
        :links="sidedLinks.right"
        horizontal
      />
      <slot />
    </div>
  </div>
  <div v-else class="navbar bg-primary z-[100]">
    <div class="navbar-start">
      <div class="flex-none sm:visible md:hidden lg:hidden xl:hidden">
        <slot name="menu" />
      </div>
      <div class="flex-1">
        <a
          href="/"
          class="btn btn-ghost text-primary-content normal-case text-xl"
          >{{ title || $vista.getWebsiteName() }}</a
        >
      </div>
      <vs-nav-menu
        v-if="'left' in sidedLinks"
        :class="menuClass"
        :links="sidedLinks.left"
        horizontal
      />
    </div>
    <div class="navbar-center flex">
      <vs-nav-menu
        v-if="'center' in sidedLinks"
        :class="menuClass"
        :links="sidedLinks.left"
        horizontal
      />
    </div>
    <div class="navbar-end">
      <vs-nav-menu :class="menuClass" :links="sidedLinks.default" horizontal />
      <vs-nav-menu
        v-if="'right' in sidedLinks"
        :class="menuClass"
        :links="sidedLinks.right"
        horizontal
      />
      <slot />
      <vs-theme-switch :class="switcherClass" tabindex="0" />
      <vs-lang-switch :class="switcherClass" tabindex="1" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { generateLinkSides } from '../composables/link'
import { useVista } from '../composables/vista'
import { LinkCollection, NavbarKind } from '../../types'

const $vista = useVista()

const { kind, title, links, menuClass, switcherClass } = defineProps<{
  kind?: NavbarKind
  title?: string
  links?: LinkCollection
  menuClass?: string | string[] | Record<string, boolean>
  switcherClass?: string | string[] | Record<string, boolean>
}>()

const sidedLinks = generateLinkSides(links)
</script>
