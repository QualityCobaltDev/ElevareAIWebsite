import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5ff',
          100: '#d9e9ff',
          200: '#bdd9ff',
          300: '#8bbcff',
          400: '#5798ff',
          500: '#3378ff',
          600: '#245ce0',
          700: '#1f4ab5',
          800: '#203f8f',
          900: '#203872',
          950: '#162347'
        }
      },
      boxShadow: {
        soft: '0 10px 40px rgba(10, 26, 58, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
