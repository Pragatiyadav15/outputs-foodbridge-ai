/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        bridge: {
          emerald: "#10B981",
          orange: "#F59E0B",
          blue: "#1E3A8A",
          white: "#FAFAFA",
          ink: "#0F172A",
        },
      },
      boxShadow: {
        glow: "0 24px 80px rgba(16, 185, 129, 0.28)",
        soft: "0 18px 60px rgba(15, 23, 42, 0.12)",
      },
      backgroundImage: {
        "radial-hope":
          "radial-gradient(circle at 20% 20%, rgba(16,185,129,.24), transparent 34%), radial-gradient(circle at 85% 15%, rgba(245,158,11,.2), transparent 32%), radial-gradient(circle at 60% 90%, rgba(30,58,138,.18), transparent 35%)",
      },
    },
  },
  plugins: [],
};
