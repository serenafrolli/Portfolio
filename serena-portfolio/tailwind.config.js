/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#F4EEFF",
          100: "#EAE3FF",
          200: "#D6C7FF",
          300: "#B89CFF",
          400: "#9B76FD",
          500: "#8B5CF6",   // primary violet
          600: "#6D41E6",
          700: "#5B21B6",   // deep violet
          800: "#471A8A",
          900: "#351465",
        },
        neutral: {
          50:  "#FFFFFF",    // page background (white)
          200: "#E5E7EB",
          400: "#9CA3AF",
          600: "#4B5563",    // body text
          800: "#1F2937",    // headings
        },
      },
    },
  },
  plugins: [],
}
