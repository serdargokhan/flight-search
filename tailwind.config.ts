import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

const config = {
    content: ["./src/**/*.{ts,tsx,mdx}"],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: { xl: "1280px" }
        },
        extend: {
            colors: {
                primary: { ...colors.blue }
            },
            fontFamily: {
                sans: ["var(--inter-font)", ...fontFamily.sans]
            },
            boxShadow: {
                card: "0px 4px 12px rgba(0, 0, 0, 0.1)"
            }
        }
    },
    future: {
        hoverOnlyWhenSupported: true
    },
    plugins: []
} satisfies Config;

export default config;
