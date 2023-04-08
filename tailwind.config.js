/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slide1: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-1620px)' },
        },
        slide2: {
          '0%': { transform: 'translateX(1620px)' },
          '100%': { transform: 'translateX(0)' },
        },
        slide3: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      transitionProperty: {
        'slide': 'transform, opacity',
      },
      animation: {
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',

        slide1: 'slide1 linear infinite',
        slide2: 'slide2 linear infinite',
        slide3: 'slide3 linear infinite',

        'marquee-infinite': 'marquee  linear infinite',
      },
      backgroundImage: {
        hero01: "url('/building.jpg')",
        base: "url('/base.jpg')",
        base02: "url('/base02.jpg')",
      },
      height: {
        '_Section-2xl': '40rem',
        '_Section-xl': '35rem',
        '_Section-lg': '30rem',
        '_Section-md': '25rem',
        '_Section-sm': '20rem',
        '_Section-xs': '15rem',
        '_Section-2xs': '10rem',
      },
      width: {
        max: '200%',
      },
      fontSize: {
        '2xs': '0.6rem',
      },
      boxShadow: {
        '3xl': '20px 20px 22px 20px rgba(0, 0, 0, 0)',
      },
    },
  },
  plugins: [],
}
