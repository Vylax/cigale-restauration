import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F5F0E6',
        lavender: '#E6E6FA',
        olive: '#708238',
        terracotta: '#E2725B',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        lora: ['var(--font-lora)'],
      },
    },
  },
  plugins: [],
};
export default config;