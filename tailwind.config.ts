import { withTV } from 'tailwind-variants/transformer'
import type { Config } from 'tailwindcss'

const config: Config = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: {
          25: '#F4F4F4',
          50: '#DFDFDF',
          200: '#B5B5B5',
          300: '#9F9F9F',
          400: '#8A8A8A',
          600: '#606060',
          700: '#4A4A4A',
          800: '#353535',
          900: '#202020',
          950: '#0B0B0B',
        },
        brand: {
          25: '#ECF2FC',
          100: '#A2BDF2',
          300: '#5888E7',
          500: '#1B52BD',
        },
      },
    },
  },
  plugins: [],
})
export default config
