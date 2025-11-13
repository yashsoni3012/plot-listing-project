/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ includes all React component file types
  ],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 0.6s infinite alternate", // smoother bounce for loader
      },
    },
  },
  plugins: [],
};
