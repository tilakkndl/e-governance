/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0E5B0E",
        "secondary-color": "#219221",
        "text-primary-color": "#FFF5FF",
        "text-secondary-color": "#595959",
      },
    },
  },
  plugins: [],
};
