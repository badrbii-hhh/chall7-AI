/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A0D16',
          dark: '#050710',
          light: '#151B2E',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B3BE',
          muted: '#9CA3AF',
        },
        accent: {
          purple: '#9F6FFF',
          pink: '#FF4E9F',
          neon: '#7B2FE0',
          violet: '#5D1DB1',
          yellow: '#FFB800',
          gold: '#D4AF37',
          cyan: '#4EFFED',
          blue: '#4E7FFF'
        },
        border: '#1F2937',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'Cairo', 'Noto Kufi Arabic', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        arabic: ['Noto Kufi Arabic', 'sans-serif'],
      },
      backgroundImage: {
        'tech-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239F6FFF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'moroccan-pattern': "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20h20v20H20V20zm20 20h20v20H40V40zm20-20h20v20H60V20zm-40 40h20v20H20V60zm20 0h20v20H40V60zm20 0h20v20H60V60z' fill='%239F6FFF' fill-opacity='0.05'/%3E%3C/svg%3E\")",
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
};