import { parseURL } from 'ufo'
import { createUnplugin } from 'unplugin'
import { VIRTUAL_FILENAME } from './constants'
import { ModuleOptions } from './types'

export const optionsLoader = createUnplugin((options: ModuleOptions = {}) => ({
  name: 'midstall-vista-options-loader',
  enforce: 'post',

  transformInclude(id) {
    const { pathname } = parseURL(id)
    return pathname.endsWith(VIRTUAL_FILENAME)
  },

  async transform(code) {
    return `${code}\nexport default () => (${JSON.stringify(options || {})})`
  },
}))
