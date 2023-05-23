/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: "#e6e6e6",
        black: "#000",
        lightgray: "#d7d7d7",
        dimgray: {
          "100": "#747474",
          "200": "#555",
        },
        whitesmoke: "#f5f5f5",
        orangered: "#cc0000",
        darkslategray: "#495057",
      },
      fontFamily: {
        inter: "Inter",
        arial: "Arial",
      },
      borderRadius: {
        "2xs": "11px",
      },
    },
    fontSize: {
      sm: "14px",
      "2xs-2": "10.2px",
      "2xs": "11px",
      "3xs": "10px",
      smi: "13px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
