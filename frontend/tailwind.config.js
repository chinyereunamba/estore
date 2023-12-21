/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      sm: '0.750rem',
      base: '1.05rem',
      xl: '1.15rem',
      '2xl': '1.5rem',
      '3xl': '2.1rem',
      '4xl': '3.1rem',
      '5xl': '3.9rem',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    colors: {
      'text': '#051523',
      'background': '#f8fbfe',
      'primary': '#258ee1',
      'secondary': '#d786ee',
      'accent': '#e754c0',
    },


  },
  plugins: [],
}