import { defineComponent, h } from 'vue'

const typedocUrl = {
  string:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
  number:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
  boolean:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
  undefined:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined',
  ComputedRef: 'https://vuejs.org/api/reactivity-core.html#computed',
  Record:
    'https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type',
  Parameters:
    'https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype',
  I18nString: '/docs/types/i18n-string',
  BetterString: '/docs/types/better-string',
  BasicLink: '/docs/types/basic-link',
  LinkGroup: '/docs/types/link-group',
  Link: '/docs/types/link',
  LinkCollection: '/docs/types/link-collection',
  BrandKind: '/docs/types/brand-kind',
  NavbarKind: '/docs/types/navbar-kind',
  LayoutOptions: '/docs/types/layout-options',
  VistaBaseInstance: '/docs/types/vista-base-instance',
  VistaInstance: '/docs/types/vista-instance',
}

export default defineComponent({
  name: 'TypeLabel',
  props: {
    value: { type: String, required: true },
    isArguments: { type: Boolean, required: false },
  },
  render() {
    const render = (type: string) => {
      if (type.indexOf('<') > 0 && type.indexOf('>') > -1) {
        const name = type.substring(0, type.indexOf('<'))
        type = type.substring(type.indexOf('<') + 1, type.indexOf('>'))
        const subtypes = type
          .split(',')
          .map((e) => render(e.trim()))
          .map((e) => [
            e,
            h(
              'span',
              {
                class: ['text-primary-content'],
              },
              ', '
            ),
          ])
          .flat()
        subtypes.pop()
        return h(
          'span',
          {
            class: ['text-primary-content'],
          },
          [
            render(name),
            '<',
            h(
              'span',
              {
                class: ['text-info'],
              },
              subtypes
            ),
            '>',
          ]
        )
      } else if (type.endsWith('[]')) {
        return h('span', [render(type.substring(0, type.length - 2)), '[]'])
      }

      const isOptional = type.endsWith('?')
      type = isOptional ? type.substring(0, type.length - 1) : type

      const docUrl = typedocUrl[type]

      return h(
        'span',
        {
          class: ['text-primary-content'],
        },
        [
          h(
            docUrl ? 'a' : 'span',
            {
              class: ['text-info', 'hover:underline'],
              href: docUrl,
              target: docUrl ? '_blank' : undefined,
            },
            [type]
          ),
          isOptional &&
            h(
              'span',
              {
                class: ['text-primary-content'],
              },
              '?'
            ),
        ]
      )
    }

    const values = (this.value as string)
      .split(this.isArguments ? ',' : '|')
      .map((e) => e.trim())
      .map((type) => render(type))
    if (values.length < 2) return h('span', values)

    const elements = values
      .map((el) => [
        el,
        h(
          'span',
          {
            class: ['text-primary-content'],
          },
          this.isArguments ? ', ' : ' | '
        ),
      ])
      .flat()
    elements.pop()
    return h('span', elements)
  },
})
