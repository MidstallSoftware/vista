# Vista

Vista is a component library for Nuxt 3, it is designed for Midstall Software to make consistent websites using Tailwind. However, anyone can use vista.

## Requirements

Vista can be installed into any Nuxt 3.0-rc1 project. However, you must install the peer dependencies yourself.

### Peer Dependencies

- `@intlify/nuxt3`
- `@nuxtjs/color-mode`

Another requirement of Vista is it needs to be included in your `nuxt.config.ts`'s `modules` before `@intlify/nuxt3` and `@nuxtjs/color-mode`.
Without this, Vista cannot find it while compiling your website and so it cannot implement the fix for i18n translations in production.

## Fixes

As Nuxt 3 is brand new, there's bound to be issues within it or with related packages.
So we've designed some workarounds which are included in Vista.

- [`@intlify/nuxt3`: `messageCompiler is not a function`](https://github.com/intlify/nuxt3/issues/39)
