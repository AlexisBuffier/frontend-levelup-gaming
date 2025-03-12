/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.bg-my-radial': {
          background: 'radial-gradient(59.17% 61.7% at 50% 54.5%, rgba(255,255,255,0.15) 0%, rgba(13,3,3,0) 100%), #1B1C1E',
        },
      };
      addUtilities(newUtilities, ['responsive']);
    }
  ],
}
