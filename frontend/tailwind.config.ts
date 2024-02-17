import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      merriweather: ['Merriweather', 'serif', 'bold'],
      montserrat: ['Montserrat', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
      'pt-sans': ['PT Sans', 'sans-serif'],
      'source-sans': ['Source Sans 3', 'sans-serif'],
    },
    extend: {
      colors: {
        // Primary
        primary: '#b2d7de',

        // Neutral
        secondary: '#eae2f0',

        // Accent
        accent: '#c2e0cd',

        // Error
        error: '#e3342f',

      },
    },
    backgroundImage: {
      gradient:
        'linear-gradient(90deg, rgba(178,215,222,1) 0%, rgba(234,226,240,1) 71%, rgba(194,224,205,1) 100%)',
    },
  },
  plugins: [],
} satisfies Config
