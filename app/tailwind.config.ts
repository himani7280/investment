import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
        roboto: ["var(--font-roboto)", "Roboto", "sans-serif"],
      },
      screens: {
        xs: "400px",
        sxs: "375px",
        custom: "500px",
      },
    },
  },
};

export default config;