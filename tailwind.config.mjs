/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#ff00cc',
        'neon-cyan': '#00ffff',
        'neon-blue': '#0066ff',
        'cyber-dark': '#1e1e2f',
        'cyber-black': '#121212',
        'cyber-gray': '#2a2a3a',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'press-start': ['"Press Start 2P"', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'grid': 'grid 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'text-shadow': '0 0 10px #ff00cc, 0 0 20px #ff00cc, 0 0 30px #ff00cc' },
          '100%': { 'text-shadow': '0 0 20px #ff00cc, 0 0 30px #ff00cc, 0 0 40px #ff00cc' },
        },
        grid: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100px)' },
        },
      },
    },
  },
  plugins: [],
}