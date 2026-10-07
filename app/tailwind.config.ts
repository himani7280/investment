import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      screens: {
        xs: "400px",
       sxs: "375px",

        custom: "500px",
      },
    },
  },
};

export default config;