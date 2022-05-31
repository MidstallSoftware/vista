import tailwindTypography from '@tailwindcss/typography'
import tailwindAspectRatio from '@tailwindcss/aspect-ratio'
import daisyUI from 'daisyui'
import type { TailwindConfig } from 'tailwindcss/tailwind-config'
import { fileURLToPath } from 'url'

const runtimeDir = fileURLToPath(new URL('./', import.meta.url))

const config: TailwindConfig = {
  content: [
    `${runtimeDir}/composables/**/*.{vue,ts,js}`,
    `${runtimeDir}/components/**/*.{vue,ts,js}`,
    `${runtimeDir}/layouts/**/*.vue`,
    `${runtimeDir}/app.{js,ts,vue}`,
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [tailwindTypography, tailwindAspectRatio, daisyUI],
}

const daisyui = {
  themes: [
    'retro',
    {
      night: {
        primary: '#414868',
        'primary-content': '#A9B1D6',
        secondary: '#A9B1D6',
        accent: '#565f89',
        neutral: '#414868',
        'base-100': '#1A1B26',
        'base-content': '#A9B1D6',
        info: '#2AC3DE',
        success: '#9ECE6A',
        warning: '#FF9E64',
        error: '#F7768E',
      },
      'night-storm': {
        primary: '#414868',
        'primary-content': '#A9B1D6',
        secondary: '#A9B1D6',
        accent: '#565f89',
        neutral: '#414868',
        'base-100': '#24283B',
        'base-content': '#A9B1D6',
        info: '#2AC3DE',
        success: '#9ECE6A',
        warning: '#FF9E64',
        error: '#F7768E',
      },
      'night-light': {
        primary: '#D5D6DB',
        'primary-content': '#343B58',
        secondary: '#343B58',
        accent: '#9699A3',
        neutral: '#0F0F14',
        'base-100': '#CDCED1',
        'base-content': '#343B58',
        info: '#166775',
        success: '#485E30',
        warning: '#965027',
        error: '#8C4351',
      },
    },
  ],
  darkTheme: 'night',
}

export default {
  ...config,
  daisyui,
}
