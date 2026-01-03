/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          rose: '#FF6B9D',
          pink: '#FFB3D9',
          lavender: '#C8A2C8',
          softPink: '#FFE5F1',
          deepRose: '#FF1493',
          blush: '#FFB6C1',
        },
      },
      fontFamily: {
        romantic: ['Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 107, 157, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 107, 157, 0.8), 0 0 60px rgba(255, 20, 147, 0.4)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}

