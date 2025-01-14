/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        lato: ["Lato"],
      },
      keyframes: {
        verticalMarquee: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-80%)" },
        },
      },
      animation: {
        verticalMarquee: "verticalMarquee 10s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
