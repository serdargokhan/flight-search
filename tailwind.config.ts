import type { Config } from "tailwindcss";

const config = {
    content: ["./src/**/*.{ts,tsx,mdx}"],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: { xl: "1280px" }
        },
        extend: {}
    },
    future: {
        hoverOnlyWhenSupported: true
    },
    plugins: []
} satisfies Config;

export default config;
