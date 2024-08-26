import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: {
          DEFAULT: 'var(--color-white)'
        },
        duckEgg: {
          DEFAULT: 'var(--color-duckEgg)'
        },
        black: {
          DEFAULT: 'var(--color-black)'
        },
        lightEgg: {
          DEFAULT: 'var(--color-lightDuckEgg)'
        }
      },
      padding: {
        section: '195px',
        sectionY: '96px'
      },
      fontFamily: {
        body: 'var(--font-nunito-sans)',
        heading: 'var(--font-libre-baskerville)'
        // heading: 'Baskerville'
      },
    },
  },
  plugins: [],
};
export default config;
