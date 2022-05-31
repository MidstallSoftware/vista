import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  externals: ['accept-language-parser'],
  entries: [
    'src/module',
    {
      input: 'src/runtime/',
      outDir: 'dist/runtime',
      format: 'cjs',
      ext: 'cjs',
      declaration: true,
    },
  ],
})
