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
        'background-img': 'url(/hero2.jpg)'
      },
      colors: {
        "background": 'hsl(var(--background))',
        "foreground": 'hsl(var(--foreground))',
      }
    },
  },
  plugins: [],
}
