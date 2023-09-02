import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function NextFont() {
    return (
        <style jsx global>
            {`
                html {
                    --inter-font: ${inter.style.fontFamily};
                }
            `}
        </style>
    );
}
