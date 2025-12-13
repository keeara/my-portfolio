/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        accent: '#fc8181',
        'card-bg': 'rgba(44, 42, 62, 0.8)',
      },
    },
  },
  plugins: [],
};
