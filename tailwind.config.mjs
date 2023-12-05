/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        woodsmoke: {
          50: "#f6f7f9",
          100: "#edeef1",
          200: "#d7dae0",
          300: "#b4bac5",
          400: "#8b94a5",
          500: "#6c768b",
          600: "#576072",
          700: "#474d5d",
          800: "#3d434f",
          900: "#363a44",
          950: "#101114",
        },
      },
    },
  },
  plugins: [],
};
