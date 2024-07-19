/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "840px",
      // => @media (min-width: 768px) { ... }

      lg: "1110px",
      // => @media (min-width: 1024px) { ... }

      xl: "4850px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "5536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
