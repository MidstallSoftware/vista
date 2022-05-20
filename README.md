# Vista

Vista is a component library for Nuxt 3, it is designed for Midstall Software to make consistent websites using Vuetify. However, anyone can use vista.

## Requirements

Vista can be installed into any Nuxt 3.0-rc1 project. However, you must install the peer dependencies yourself.

### Peer Dependencies

- `@intlify/nuxt3`
- `@nuxtjs/color-mode`
- `@mdi/font`
- `vuetify@3.0.0-beta.2`

Another requirement of Vista is it needs to be included in your `nuxt.config.ts`'s `modules` before `@intlify/nuxt3` and `@nuxtjs/color-mode`.
Without this, Vista cannot find it while compiling your website and so it cannot implement the fix for i18n translations in production.

## Fixes

As Nuxt 3 is brand new, there's bound to be issues within it or with related packages.
So we've designed some workarounds which are included in Vista.

- [`@intlify/nuxt3`: `messageCompiler is not a function`](https://github.com/intlify/nuxt3/issues/39)

## Built-in's

Vista comes with many built-in components, layouts, and even themes.

### Themes

- [Tokyo Night (**default**), Tokyo Night Storm, Tokyo Night Light](https://github.com/enkia/tokyo-night-vscode-theme)

### Components

- `vs-app`: Extended type from Vuetify's `v-app`
- `vs-copyright`: A label for adding a copyright message
- `vs-footer`: Extended type from Vuetify's `v-footer`, implements different layouts
- `vs-lang-switcher`: A configurable language switching element, can render as a `v-select` or a button with a menu
- `vs-link`: A very useful link building component, can render lists and menus
- `vs-main`: Extended type from Vuetify's `v-main`, centers children
- `vs-nav`: A `v-app-bar` with `v-navigation-drawer` that builds the menus for you
- `vs-theme-switcher`: A configurable theme switching element, can render as a `v-select` or a button with a menu

### Layouts

- `vs-default`: A default layout, comes with everything someone would want for a basic website
