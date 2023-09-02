import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/layouts/MainLayout";
import { NextFont } from "@/components/shared";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextFont />

            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    );
}
