import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dianne: {
          "50": "#eefdfd",
          "100": "#d3f8fa",
          "200": "#adeff4",
          "300": "#75e2eb",
          "400": "#36cdda",
          "500": "#1ab0c0",
          "600": "#188da2",
          "700": "#1a7284",
          "800": "#1e5d6c",
          "900": "#19424e",
          "950": "#0e333e",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
