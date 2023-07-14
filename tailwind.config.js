/** @type {import('tailwindcss').Config} */

export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    transitionTimingFunction: {
      pointer: "cubic-bezier(0.4, 0.6, 0.6, 0.8)",
    },
  },
  screens: {
    sm: "640px",
    // => @media (min-width: 640px) { ... }

    md: "804px",
    // => @media (min-width: 804px) { ... }

    bmid: "923px",
    // => @media (min-width: 923px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
  },
};
export const plugins = [];
