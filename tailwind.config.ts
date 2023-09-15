import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        secondaryOffWhite: "#f3f3f3",
      },
      width: {
        contain: "1200px",
      },
      maxWidth: {
        contain: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
