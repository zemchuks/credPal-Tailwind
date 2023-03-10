/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    backgroundImage: {
      savings: "url('./assets/savings.png')",
    },
    container: {
      // default breakpoints but with 40px removed
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1042px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
