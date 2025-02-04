import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url(/logo.png)",
        logoSecondary: "url(/logo-secondary.png)",
        logoWhite: "url(/logo-white.png)",
        logoFull: "url(/full-logo.png)",
        dashboardSearchBg: "url(/dashboard-search-bg.png)",
        loginBg: "url(/login-bg.png)",
      },
      colors: {
        primary: "#3A3F5F",
        primary2: "#F4E1C9",
        secondary: "#D4A76A",
        secondary2: "#4A90A2",
        highlight: "#C04A59",
        light: "#e2e2e2",
      },
    },
  },
  plugins: [],
} satisfies Config;
