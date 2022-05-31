import { defineNuxtConfig } from 'nuxt'
import {
  mdiHome,
  mdiDownloadBox,
  mdiTranslate,
  mdiBook,
  mdiApplicationBrackets,
  mdiMenu,
  mdiMouse,
  mdiBrightness6,
  mdiWheelchairAccessibility,
  mdiLayersTriple,
  mdiLink,
  mdiLanguageTypescript,
} from '@mdi/js'
import MSNuxtLib from '..'

export default defineNuxtConfig({
  modules: [MSNuxtLib],
  debug: true,
  meta: {
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },
  vista: {
    branding: {
      kind: 'product',
      license: 'GPL-3.0',
    },
    layouts: {
      default: {
        links: [
          {
            url: '/',
            icon: mdiHome,
            title: { key: 'page.home' },
            side: ['default', 'default'],
          },
          {
            url: '/docs',
            icon: mdiBook,
            title: { key: 'page.docs.home' },
            side: ['default', 'default'],
          },
        ],
      },
      sidebar: {
        links: [
          {
            url: '/',
            icon: mdiHome,
            title: { key: 'page.home' },
            side: ['default', 'default', 'default'],
          },
          {
            url: '/docs',
            icon: mdiBook,
            title: { key: 'page.docs.home' },
            side: ['default', 'default', 'default'],
          },
          {
            url: '/docs/#getting-started',
            icon: mdiDownloadBox,
            title: { key: 'page.docs.getting-started' },
            side: ['sidebar'],
          },
          {
            title: { key: 'page.docs.components.home' },
            icon: mdiApplicationBrackets,
            side: ['sidebar'],
            children: [
              {
                url: '/docs/components/lang-switch',
                title: { key: 'page.docs.components.lang-switch' },
                icon: mdiTranslate,
              },
              {
                url: '/docs/components/nav-bar',
                title: { key: 'page.docs.components.nav-bar' },
                icon: mdiMenu,
              },
              {
                url: '/docs/components/nav-button',
                title: { key: 'page.docs.components.nav-button' },
                icon: mdiMouse,
              },
              {
                url: '/docs/components/nav-drawer',
                title: { key: 'page.docs.components.nav-drawer' },
                icon: mdiMenu,
              },
              {
                url: '/docs/components/nav-menu',
                title: { key: 'page.docs.components.nav-menu' },
                icon: mdiMenu,
              },
              {
                url: '/docs/components/nav',
                title: { key: 'page.docs.components.nav' },
                icon: mdiMenu,
              },
              {
                url: '/docs/components/sidebar',
                title: { key: 'page.docs.components.sidebar' },
                icon: mdiMenu,
              },
              {
                url: '/docs/components/theme-switch',
                title: { key: 'page.docs.components.theme-switch' },
                icon: mdiBrightness6,
              },
            ],
          },
          {
            title: { key: 'page.docs.composables.home' },
            icon: mdiApplicationBrackets,
            side: ['sidebar'],
            children: [
              {
                url: '/docs/composables/accessibility',
                title: { key: 'page.docs.composables.accessibility' },
                icon: mdiWheelchairAccessibility,
              },
              {
                url: '/docs/composables/layout',
                title: { key: 'page.docs.composables.layout' },
                icon: mdiLayersTriple,
              },
              {
                url: '/docs/composables/link',
                title: { key: 'page.docs.composables.link' },
                icon: mdiLink,
              },
              {
                url: '/docs/composables/vista',
                title: { key: 'page.docs.composables.vista' },
              },
            ],
          },
          {
            title: { key: 'page.docs.layouts.home' },
            icon: mdiApplicationBrackets,
            side: ['sidebar'],
            children: [
              {
                url: '/docs/layouts/default',
                title: { key: 'page.docs.layouts.default' },
              },
              {
                url: '/docs/layouts/sidebar',
                title: { key: 'page.docs.layouts.sidebar' },
              },
            ],
          },
          {
            title: { key: 'page.docs.types.home' },
            icon: mdiLanguageTypescript,
            side: ['sidebar'],
            children: [
              {
                url: '/docs/types/i18n-string',
                title: 'I18nString',
              },
              {
                url: '/docs/types/better-string',
                title: 'BetterString',
              },
              {
                url: '/docs/types/basic-link',
                title: 'BasicLink',
              },
              {
                url: '/docs/types/link-group',
                title: 'LinkGroup',
              },
              {
                url: '/docs/types/link',
                title: 'Link',
              },
              {
                url: '/docs/types/link-collection',
                title: 'LinkCollection',
              },
              {
                url: '/docs/types/brand-kind',
                title: 'BrandKind',
              },
              {
                url: '/docs/types/navbar-kind',
                title: 'NavbarKind',
              },
              {
                url: '/docs/types/layout-options',
                title: 'LayoutOptions',
              },
              {
                url: '/docs/types/vista-base-instance',
                title: 'VistaBaseInstance',
              },
              {
                url: '/docs/types/vista-instance',
                title: 'VistaInstance',
              },
            ],
          },
        ],
      },
    },
  },
  nitro: {
    preset: 'cloudflare',
  },
  intlify: {
    vueI18n: {
      locale: 'en',
      fallbackRoot: true,
      messages: {
        en: {
          'prop-title': 'Props',
          'slot-title': 'Slots',
          'import-path': 'Imported from: {0}',
          'extend-type': 'Extends from: {0}',
          slots: {
            default: 'The default Vue slot.',
          },
          company: {
            name: 'Midstall Software',
          },
          product: {
            name: 'Vista',
          },
          page: {
            home: 'Home',
            docs: {
              home: 'Documentation',
              'getting-started': 'Getting Started',
              components: {
                home: 'Components',
                'lang-switch': 'Language Switch',
                'nav-bar': 'Navigation Bar',
                'nav-button': 'Navigation Button',
                'nav-drawer': 'Navigation Drawer',
                'nav-menu': 'Navigation Menu',
                nav: 'Navigation',
                sidebar: 'Sidebar',
                'theme-switch': 'Theme Switch',
              },
              composables: {
                home: 'Composables',
                accessibility: 'Accessibility',
                layout: 'Layout',
                link: 'Link',
                vista: 'Vista',
              },
              layouts: {
                home: 'Layouts',
                default: 'Default',
                sidebar: 'Sidebar',
              },
              types: {
                home: 'Types',
              },
            },
          },
        },
        ja: {
          company: {
            name: 'ミッドストールソフトウェア',
          },
          product: {
            name: 'ビスタ',
          },
          page: {
            home: 'ホメ',
          },
        },
      },
    },
  },
})
