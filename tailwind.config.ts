import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      screens: {
        // Quebra celular/desktop do design novo (HANDOFF.md)
        d: "900px",
      },
      fontFamily: {
        heading: ["'Cormorant Garamond'", "serif"],
        body: ["'Montserrat'", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
          dark: "hsl(var(--gold-dark))",
        },
        charcoal: "hsl(var(--charcoal))",
        // Paleta do design novo (HANDOFF.md, "Sistema visual")
        cl: {
          bg: "#FBF9F5",
          sand: "#F3EEE6",
          line: "#E6DFD3",
          ink: "#1C1916",
          "ink-hover": "#2B2620",
          text: "#4A443C",
          muted: "#6B625A",
          gold: "#7A5C24",
          "gold-soft": "#C9A66B",
          cream: "#F3E8D2",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(200,169,110,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(200,169,110,0.4)" },
        },
        // Dica de "arraste" do carrossel "Veja também" (design novo)
        "cl-swipe": {
          "0%, 15%": { transform: "translateX(0)" },
          "45%": { transform: "translateX(-56px)" },
          "75%, 100%": { transform: "translateX(0)" },
        },
        "cl-hand": {
          "0%, 10%": { transform: "translateX(0)", opacity: "0" },
          "15%": { opacity: "1" },
          "45%": { transform: "translateX(-48px)", opacity: "1" },
          "60%, 100%": { transform: "translateX(-48px)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "cl-swipe": "cl-swipe 2.2s cubic-bezier(.4,0,.2,1) .3s 2",
        "cl-hand": "cl-hand 2.2s cubic-bezier(.4,0,.2,1) .3s 2",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;