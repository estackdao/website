import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        brand: ['Zen Dots'],
        text:['Roboto'],
        title:['Impact'],
      },
      backgroundImage: {
        'lossless': "url('/images/lossless_textbg.png')",
        'trustless': "url('/images/trustless_textbg.png')",
        'seamless': "url('/images/seamless_textbg.png')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
