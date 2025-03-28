import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryAvolta: "#8756E8",
        primaryL: "#ECE4FB",
        primaryL1: "#9F78ED",
        primaryL2: "#D4C2F7",
        grayscale600: "#0E0B2B",
        gray200: "#CFCED5",
        gray500: "#56546B",
        gray400: "#868595",
        gray600: "#0E0B2B",
        grayscale500: "#262340",
        softPink: "#FFDCDD",
        deepRed: "#9A1016",
        orange: "#FF9066",
        red: "#F8111B",
      },
      backgroundImage: {
        "gradient-avolta":
          "linear-gradient(to bottom, rgba(212, 194, 247, 1) 30%, rgba(120, 84, 230, 0.6) 70%)",
        "gradient-main-img":
          " linear-gradient(360deg, #000000 6.84%, rgba(0, 0, 0, 0) 94.44%)",
      },
      borderRadius: {
        "40px": "40px",
        "48px": "48px",
        "56px": "56px",
        "60px": "60px",
      },
    },
  },
  plugins: [],
} satisfies Config;
