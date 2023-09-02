import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
    content: ["./src/**/*.{ts,tsx,mdx}"],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: { xl: "1280px" }
        },
            fontFamily: {
                sans: ["var(--inter-font)", ...fontFamily.sans]
            },
    },
    future: {
        hoverOnlyWhenSupported: true
    },
    plugins: []
} satisfies Config;

export default config;
