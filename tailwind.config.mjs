/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Maps to the --black CSS variable so it adapts in dark mode
        primary: 'rgb(var(--black))',
      },
    },
  },
  plugins: [],
}
