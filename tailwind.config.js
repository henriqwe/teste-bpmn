/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { pure: "#0CD664" },
        secondary: { pure: "#111827" },
        background: "#F7F8FA",
        stroke: "#E6E6E6",
        highlight: {
          pure: "#DF7153",
          light: "#EE9C86",
          medium: "#B83A18",
          dark: "#6B2613",
        },
        neutral: {
          low: {
            pure: "#000000",
            50: "#A3A3A3",
            100: "#666666",
            200: "#5E5E5E",
            300: "#4B4B4B",
            400: "#393939",
            500: "#292929",
          },
          high: {
            pure: "#292929",
            50: "#F3F3F3",
            100: "#DDDDDD",
            200: "#C6C6C6",
            300: "#B0B0B0",
            400: "#9B9B9B",
            500: "#868686",
          },
        },
        warning: {
          pure: "#FACC15",
          light: "#FFF8DC",
          medium: "#CCA611",
          dark: "#A48000",
        },
        success: {
          pure: "#059669",
          light: "#DBFFF4",
          medium: "#336656",
          dark: "#14332A",
        },
        info: {
          pure: "#06B6D4",
          light: "#DBFAFF",
          medium: "#267380",
          dark: "#02323B",
        },
        danger: {
          pure: "#B91C1C",
          light: "#FFC9C9",
          medium: "#991717",
          dark: "#4D0C0C",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "5xl": ["3rem", "4.2rem"],
        "4xl": ["2.25rem", "3.375rem"],
        "3xl": ["1.875rem", "2.812rem"],
        "2xl": ["1.5rem", "2.25rem"],
        xl: ["1.25rem", "1.875rem"],
        lg: ["1.125rem", "1.687rem"],
        base: ["1rem", "1.5rem"],
        sm: ["0.875rem", "1.137rem"],
        xs: [".75rem", ".975rem"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
