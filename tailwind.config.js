/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "sohne-var": "sohne-var",
      },
      colors: {
        "semi-gray": "#0a2540",
        "stripe-blue": "#635bff",
        "stripe-sky-blue": "#00d4ff",
        "gradient-1": "#a960ee",
        "gradient-2": "#ff333d",
        "gradient-3": "#90e0ff",
        "gradient-4": "#ffcb57",
        "gradient-5": "#3a3a3a",
        "button-color": "#CFD7DF",
        "dark-blue": "#0A2540",
        "dark-gray": "#8d95ec",
        "sky-text": "#0048e5",
        "light-gray": "#F6F9FC",
        "title-gray": "#425466",
        "hard-blue": "#7A73FF",
        "soft-green": "#80E9FF",
      },
      transformOrigin: {
        0: "0",
      },
      width: {
        "1/2": "0.5px",
        seventy: "70%",
        "1/10": "10px",
        "1/1000": "1000px",
        eighty: "80%",
      },
      height: {
        "1/40": "40rem",
        "1/2.1": "2.1px",
        "1/50": "50%",
        "1/80": "80rem",
        "1/100": "100rem",
      },

      padding: {
        "p/4": "7px",
      },
      gap: {
        "g/4": "7px",
        "g/20": "20px",
      },
      margin: {
        "1/10.31": "10.31px",
        "1/9": "9rem",
        "1/30": "50rem",
        "1/100": "100%",
        "1/32": "110rem",
      },
      translate: {
        "1/1": "1px",
        "1/1.55": "1.55px",
        "1/30": "30px",
      },
      lineHeight: {
        "1/3": "3.5rem",
      },
    },
  },
  plugins: [],
};
