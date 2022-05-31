const loadPreset = () => {
  try {
    return require('../dist/runtime/tailwind.cjs')
  } catch {
    return {}
  }
}

module.exports = {
  presets: [loadPreset()],
}
