/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "rgba(255,255,255,0.12)",
        accent: '#fc8181',
        'card-bg': 'rgba(44, 42, 62, 0.8)',
      },
    },
  },
  plugins: [],
};
