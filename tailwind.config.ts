import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "inverse-primary": "#4c6700",
        "surface-tint": "#a2d800",
        "primary-fixed": "#b9f600",
        "on-background": "#e2e2e2",
        "secondary": "#c6c6c7",
        "on-secondary-fixed-variant": "#454747",
        "on-primary-fixed-variant": "#384e00",
        "inverse-on-surface": "#303030",
        "on-tertiary": "#313030",
        "on-error-container": "#ffdad6",
        "background": "#131313",
        "surface-container-lowest": "#0e0e0e",
        "surface-container": "#1f1f1f",
        "on-tertiary-fixed": "#1c1b1b",
        "on-surface": "#e2e2e2",
        "surface-container-low": "#1b1b1b",
        "inverse-surface": "#e2e2e2",
        "outline-variant": "#434933",
        "on-tertiary-container": "#656464",
        "on-tertiary-fixed-variant": "#474746",
        "on-secondary-fixed": "#1a1c1c",
        "surface": "#131313",
        "on-secondary": "#2f3131",
        "primary-fixed-dim": "#a2d800",
        "surface-container-highest": "#353535",
        "on-primary-fixed": "#141f00",
        "primary-container": "#b9f600",
        "on-secondary-container": "#b4b5b5",
        "primary": "#ffffff",
        "surface-variant": "#353535",
        "tertiary": "#ffffff",
        "surface-container-high": "#2a2a2a",
        "tertiary-fixed-dim": "#c8c6c5",
        "on-primary-container": "#516e00",
        "on-surface-variant": "#c3caac",
        "tertiary-container": "#e5e2e1",
        "secondary-container": "#454747",
        "error-container": "#93000a",
        "tertiary-fixed": "#e5e2e1",
        "outline": "#8d9479",
        "on-primary": "#263500",
        "surface-dim": "#131313",
        "surface-bright": "#393939",
        "on-error": "#690005",
        "error": "#ffb4ab",
        "secondary-fixed": "#e2e2e2",
        "secondary-fixed-dim": "#c6c6c7"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "overlap-offset": "-64px",
        "gutter": "24px",
        "unit": "4px",
        "margin-edge": "40px"
      },
      fontFamily: {
        "headline-lg": ["Lexend", "sans-serif"],
        "display-hero": ["Lexend", "sans-serif"],
        "headline-md": ["Lexend", "sans-serif"],
        "body-lg": ["Lexend", "sans-serif"],
        "body-md": ["Lexend", "sans-serif"],
        "label-technical": ["Space Grotesk", "sans-serif"],
        "label-annotation": ["Space Grotesk", "sans-serif"]
      },
      fontSize: {
        "headline-lg": ["64px", {"lineHeight": "110%", "letterSpacing": "-0.02em", "fontWeight": "800"}],
        "display-hero": ["120px", {"lineHeight": "100%", "letterSpacing": "-0.05em", "fontWeight": "900"}],
        "headline-md": ["32px", {"lineHeight": "120%", "fontWeight": "700"}],
        "body-lg": ["18px", {"lineHeight": "160%", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "160%", "fontWeight": "300"}],
        "label-technical": ["12px", {"lineHeight": "100%", "letterSpacing": "0.1em", "fontWeight": "500"}],
        "label-annotation": ["10px", {"lineHeight": "140%", "fontWeight": "400"}]
      }
    },
  },
  plugins: [],
};
export default config;
