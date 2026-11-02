import plugin from "tailwindcss/plugin";

/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
        roboto: ["var(--font-roboto)", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        body: {
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          fontSize: "15px",
          lineHeight: "1.6",
        },
        "h1, h2, h3, h4, h5, h6, .font-title": {
          fontFamily: 'var(--font-roboto), Roboto, sans-serif',
          letterSpacing: "-0.02em",
        },
      });
    }),
  ],
};

export default config;

