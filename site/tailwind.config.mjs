/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: { 900: '#061626', 800: '#0B2540', 700: '#123A5E', 600: '#1B5080' },
        amber: { 700: '#9A5B04', 600: '#C67806', 500: '#F5A524', 400: '#FFBE55', 100: '#FFF3DE' },
        teal: { 700: '#0C5566', 500: '#17879F', 300: '#6EBACB', 100: '#DCEFF3' },
        salt: { 0: '#FFFFFF', 50: '#F7F9FA', 100: '#EEF2F4', 200: '#DFE6EA', 300: '#C4CFD6', 400: '#94A4AE', 500: '#6B7C87', 600: '#4D5D67' },
        sand: { 100: '#F4EFE6', 200: '#EDE4D4' },
      },
      fontFamily: {
        display: ['Chivo', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body: ['Karla', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Menlo', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        md: '6px',
        lg: '10px',
        pill: '9999px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(6,22,38,.08)',
        sm: '0 2px 6px rgba(6,22,38,.08)',
        md: '0 6px 18px rgba(6,22,38,.10)',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        gutter: '24px',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 48s linear infinite',
      },
    },
  },
  plugins: [],
};
