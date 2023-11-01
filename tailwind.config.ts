import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "0",
      },
    },
    extend: {
      colors: {
        black: "rgb(17, 22, 24)",
        "black-alpha": "rgba(17, 22, 24, 0.125)",
        white: "rgb(255, 252, 250)",
        "white-alpha": "rgba(255, 252, 250,0.125)",
        red: "rgb(177, 1, 1)",
        "red-alpha": "rgba(177, 1, 1, 0.125)",
        blue: "rgb(0, 135, 157)",
        "blue-alpha": "rgba(0, 135, 157, 0.125)",
        gray: "rgb(226,224,223)",
        "gray-alpha": "rgba(226,224,223, 0.125)",
        purple: "rgb(92, 33, 241)",
        "purple-alpha": "rgba(92, 33, 241, 0.125)",
      },
    },
  },
  plugins: [],
};
export default config;
