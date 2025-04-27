/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B21B6',      // Deep Indigo (gradient start)
        secondary: '#7C3AED',    // Purple 500 (gradient mid)
        accent: '#0EA5E9',        // Sky Blue (highlight / secondary)
        darkslate: '#1E293B',    // Text - Dark Slate Gray
        background: '#F9FAFB',   // Soft white background
        highlight: '#FACC15',    // Yellow accent if needed
      },
    },
  },
  plugins: [],
}