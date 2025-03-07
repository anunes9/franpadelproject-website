/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px", // default mobile
        md: "768px", // tablet
        lg: "1024px", // desktop
        xl: "1200px", // large desktop
      },
      backgroundImage: {
        blueWhite:
          "linear-gradient(to bottom, #122C49 0%, #122C49 1075px, white 1075px, white 100%)",
        blueGreen:
          "linear-gradient(to bottom, #122C49 0%, #6bb8a4 20%, #6bb8a4 100%)",
        heroPattern:
          "linear-gradient(to top, transparent 0%, transparent 50%, rgba(18, 44, 73, 0.5) 50%, rgba(18, 44, 73, 1) 100%), linear-gradient(to bottom, transparent 0%, transparent 50%, white 100%), url('/assets/pattern.png')",
        heroColor:
          "linear-gradient(to top, white 0%, white 50%, #122C49 50%, #122C49 100%)",
        menu: "url('/assets/menu-background.png')",
        bodyPattern: "url('/assets/pattern.png')",
        flag: "-webkit-linear-gradient(-45deg, #FFFFFF 50%, transparent 50%);",
      },
      backgroundSize: {
        "100%": "100%",
      },
      fontFamily: {
        projectFontMedium: ["gt-america-medium"],
        projectFontMediumExtended: ["gt-america-medium-extended"],
        projectFont: ["gt-america"],
        projectFontExtended: ["gt-america-extended"],
        projectFontExtendedBlack: ["gt-america-extended-black"],
        roboto: ["var(--font-roboto)"],
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        lg: "22px",
        xl: "29px",
      },
      colors: {
        projectBlue: "#122C49",
        projectGreen: "#6bb8a4",
        projectGray: "#F4F4F4",
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
      boxShadow: {
        out: "10px 10px 50px 0px rgba(0,0,0,0.75)",
        green: "0px 0px 16px 4px rgba(107,184,164,1)",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
}
