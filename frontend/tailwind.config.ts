import type { Config } from 'tailwindcss'

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            merriweather: ['Merriweather', 'serif'],
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
            }
        },
    },
    plugins: [],
} satisfies Config
