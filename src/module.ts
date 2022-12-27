import {
  addComponentsDir,
  addPlugin,
  addTemplate,
  extendViteConfig,
  defineNuxtModule,
  installModule,
  addImports,
  addLayout,
} from '@nuxt/kit'
import { vueI18n } from '@intlify/vite-plugin-vue-i18n'
import { VitePluginVueI18nOptions } from '@intlify/vite-plugin-vue-i18n/lib/options'
import { access } from 'fs/promises'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { name, version } from '../package.json'
import { ModuleOptions } from './types'

const LAYOUTS = ['default', 'sidebar']

const exists = async (path) => {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'vista',
  },
  defaults: {
    branding: {
      kind: 'product',
    },
    i18n: {
      localeDir: 'locales',
    },
    layouts: Object.fromEntries(
      LAYOUTS.map((name) => [
        name,
        {
          links: [],
          center: true,
        },
      ])
    ),
  },
  hooks: {
    'app:resolve': (app) => {
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      app.layouts = Object.assign(
        app.layouts || {},
        Object.fromEntries(
          LAYOUTS.map((shortName) => [
            `vs-${shortName}`,
            {
              name: `vs-${shortName}`,
              file: resolve(runtimeDir, 'layouts', shortName + '.vue'),
            },
          ])
        )
      )

      app.mainComponent = resolve(runtimeDir, 'app.vue')
      // app.errorComponent = resolve(runtimeDir, 'error.vue')
    },
  },
  async setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    await installModule('@nuxtjs/color-mode', null, nuxt)
    await installModule(
      '@nuxtjs/tailwindcss',
      {
        configPath: resolve(nuxt.options.srcDir, 'tailwind.config.cjs'),
        config: {
          content: [
            `${runtimeDir}/composables/**/*.{vue,ts,js}`,
            `${runtimeDir}/components/**/*.{vue,ts,js}`,
            `${runtimeDir}/layouts/**/*.vue`,
            `${runtimeDir}/app.{js,ts,vue}`,
          ],
        },
        cssPath: `${runtimeDir}/assets/css/tailwind.css`,
        exposeConfig: true,
      },
      nuxt
    )
    await installModule('@intlify/nuxt3', null, nuxt)

    const localeDir = options.i18n.localeDir || 'locales'
    const localePath = resolve(nuxt.options.srcDir, localeDir)
    const hasLocaleFiles = await exists(localePath)

    nuxt.options.postcss.plugins.tailwindcss =
      nuxt.options.postcss.plugins.tailwindcss || {}
    nuxt.options.postcss.plugins.autoprefixer =
      nuxt.options.postcss.plugins.autoprefixer || {}

    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.vite.define['process.env.DEBUG'] =
      nuxt.options.debug.toString()

    for (const fname of ['default']) {
      const path = resolve(runtimeDir, nuxt.options.dir.layouts, `${fname}.vue`)
      addLayout({
        filename: `vs-${fname}`,
        src: path,
      })
    }

    nuxt.options.alias['#midstallsw-vista-options'] = addTemplate({
      filename: 'midstallsw-vista-options.mjs',
      getContents: () =>
        Object.entries(options)
          .map(
            ([key, value]) =>
              `export const ${key} = ${JSON.stringify(value, null, 2)}
			`
          )
          .join('\n'),
    }).dst

    addImports({
      name: 'useVista',
      as: 'useVista',
      from: resolve(runtimeDir, 'composables', 'vista'),
    })

    addComponentsDir({
      path: resolve(runtimeDir, 'components'),
      prefix: 'vs',
    })

    addPlugin(resolve(runtimeDir, 'plugin'))

    extendViteConfig((config) => {
      const i = config.plugins.findIndex(
        (value) =>
          (value as Record<string, any>).name === 'vite-plugin-vue-i18n'
      )
      if (i === -1)
        throw new Error(
          '[vista] requires @intlify/nuxt3, please load it before vista'
        )
      const viteOptions: VitePluginVueI18nOptions = {
        compositionOnly: false,
        runtimeOnly: false,
      }

      if (hasLocaleFiles) {
        viteOptions.include = resolve(localeDir, './**')
      }

      config.plugins[i] = vueI18n(viteOptions)

      config.optimizeDeps.include.push('accept-language-parser')
      config.define['process.env.NODE_ENV'] = `"${
        process.env.NODE_ENV || 'development'
      }"`
      config.define['process.env.DEBUG'] = `${process.env.DEBUG || 'false'}`
    })
  },
})
