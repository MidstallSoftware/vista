import {
  addComponentsDir,
  addPlugin,
  addTemplate,
  addVitePlugin,
  addWebpackPlugin,
  defineNuxtModule,
} from '@nuxt/kit'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { VIRTUAL_FILENAME } from './constants'
import { optionsLoader } from './loader'
import { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'midstall-vista',
    version: '0.1.0',
    configKey: 'vista',
  },
  defaults: {
    branding: {
      kind: 'product',
    },
  },
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    nuxt.options.modules.push('@intlify/nuxt3')
    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.build.transpile.push('vuetify')
    nuxt.options.css.push('vuetify/styles')
    nuxt.options.css.push('@mdi/font/css/materialdesignicons.min.css')
    nuxt.options.vite.define['process.env.DEBUG'] =
      nuxt.options.debug.toString()

    addTemplate({
      filename: VIRTUAL_FILENAME,
      getContents: () => '',
    })

    addWebpackPlugin(optionsLoader.webpack(options))
    addVitePlugin(optionsLoader.vite(options))

    addComponentsDir({
      path: resolve(runtimeDir, 'components'),
    })

    addPlugin(resolve(runtimeDir, 'plugin'))
  },
})
