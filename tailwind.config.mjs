/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#f9f6f0',
        'cream-dark': '#ede8dc',
        brown: {
          DEFAULT: '#2c1a0e',
          mid: '#5c3d22',
        },
        gold: {
          DEFAULT: '#b8960c',
          light: '#d4aa20',
        },
        green: {
          DEFAULT: '#53A316',
          dark: '#3e7d10',
        },
        tan: {
          DEFAULT: '#B5A181',
          dark: '#9a8a6e',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Lato', '"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
