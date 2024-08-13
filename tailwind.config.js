/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        firstColor: "#03224c",
        white: "#f4f4f4",
        black: "#3e3f40",
      },
      fontFamily: {
        tnrm: ["Times New Roman", "serif"],
      },
      backgroundImage: {
        main: "url('/background.jpg')",
        eventImage: "url('/src/assets/images/event/1.jpg')",
      },
    },
  },
  //plugins: [require("daisyui")],
};
