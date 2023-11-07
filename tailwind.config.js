/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          wiggle: 'wiggle 1s ease-in-out infinite',
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      
      colors: {
      'rose-white': '#fff5ee',
      'shushime': '#e3894d',
      'blue-kc': '#262e47',
    },

      backgroundImage: {
        'hero-pattern': ""
      },
      
      fontFamily: {
        'mono': ['Shrikhand'],
      },
      spacing: {
        '128': '32rem',
      }
      
    },
  },
  plugins: [],
}