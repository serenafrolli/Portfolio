/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#F0F4FA",
          100: "#DCE6F5",
          200: "#B9CCE8",
          300: "#8AA8D4",
          400: "#5B82BC",
          500: "#3A62A0",
          600: "#2A4A82",
          700: "#1E3563",
          800: "#142447",
          900: "#0B1730",
          950: "#060E1F",
        },
        accent: {
          DEFAULT: "#4F8EF7",
          light: "#9DC1FB",
        },
        paper: "#F7F9FC",
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
