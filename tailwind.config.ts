import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Brittany Chiang–style navy theme
        cBg: '#020c1b', // main background
        cBgGradient: '#0a192f', // gradient / panel background
        cH1: '#e6f1ff', // primary headings
        cH2: '#e6f1ff',
        cH3: '#e6f1ff',
        cH4: '#e6f1ff',
        cH5: '#e6f1ff',
        cH6: '#e6f1ff',
        cBody: '#8892b0', // body text
        cBlock: '#112240', // cards / blocks
        cLink: '#64ffda', // accent links
        cLinkVisited: '#64ffda',
        cButton: '#112240', // buttons / pills
        cButtonHover: '#233554',
        cLineBreak: '#233554', // dividers
      },
      fontFamily: {
        'font': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
