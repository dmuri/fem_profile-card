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
        'pattern-top': "url('/images/bg-pattern-top.svg')",
        'pattern-bottom': "url('/images/bg-pattern-bottom.svg')",
        'pattern-card': "url('/images/bg-pattern-card.svg')",
      },
      fontWeight: {
        'normal': 400,
        'bold': 700,
      },
      colors: {
        primary: {
          darkCyan: 'hsl(185, 75%, 39%)',
          veryDarkDesaturatedBlue: 'hsl(229, 23%, 23%)',
          darkGrayishBlue: 'hsl(227, 10%, 46%)',
        },
        neutral: {
          darkGray: 'hsl(0, 0%, 59%)',
        },
      },
    },
    plugins: [],
  }
}
