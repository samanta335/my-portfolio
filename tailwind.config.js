/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["aqua", "luxury", "synthwave"],
  },
  plugins: [require("daisyui")],
};
