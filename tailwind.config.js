/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to top, transparent 0%, transparent 50%, rgba(18, 44, 73, 0.5) 50%, rgba(18, 44, 73, 1) 100%), linear-gradient(to bottom, transparent 0%, transparent 50%, white 100%), url('/assets/pattern.png')",
        "hero-color":
          "linear-gradient(to top, white 0%, white 50%, #122C49 50%, #122C49 100%)",
        menu: "url('/assets/menu-background.png')",
      },
      backgroundSize: {
        "100%": "100%",
      },
      fontFamily: {
        projectFontMedium: ["var(--font-gt-america-medium)"],
        projectFont: ["var(--font-gt-america)"],
      },
      colors: {
        projectBlue: "#122C49",
        projectGreen: "#6bb8a4",
        green: {
          50: "#f3faf7",
          100: "#d7f0e8",
          200: "#afe0d0",
          300: "#7fc9b4",
          400: "#6bb8a4",
          500: "#3a927c",
          600: "#2d7464",
          700: "#275e53",
          800: "#234c44",
          900: "#21403a",
          950: "#0e2521",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        dimmed: "hsl(var(--dimmed))",
      },
    },
  },
  plugins: [],
}
