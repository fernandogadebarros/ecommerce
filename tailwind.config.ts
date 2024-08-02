import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      padding: '0rem',
      center: true,
      screens: {
        xl: '1110px'
      }
    },
    extend: {
      colors: {
        orange: {
          light: '#fbaf85',
          regular: '#D87D4A'
        },
        gray: {
          lightest: '#FAFAFA',
          light: '#F1F1F1',
          darkest: '#101010'
        }
      }
    }
  },
  plugins: []
}
export default config
