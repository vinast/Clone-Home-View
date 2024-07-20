/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "red-glow": "0 0 15px 5px rgba(255, 0, 0, 0.5)",
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "ui-serif", "Georgia"],
        mono: ["Menlo", "Monaco", "Courier New"],
      },
    },
  },
  plugins: [],
};
