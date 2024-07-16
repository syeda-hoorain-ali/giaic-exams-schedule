import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        nav: "0 5px 15px rgba(0, 0, 0, 0.5)"
      },
      keyframes: {
        cursor: {
          '50%': { borderColor: 'transparent' }
        },
        typing: {
          from: { width: '0'}
        }
      },
      animation: {
        typing: 'typing 2s steps(5)',
        cursor: 'cursor .4s step-end infinite alternate'
      }
    },
  },
  plugins: [],
};
export default config;
