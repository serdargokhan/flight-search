import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/layouts/MainLayout";
import { NextFont } from "@/components/shared";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextFont />

            <QueryClientProvider client={queryClient}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </QueryClientProvider>
        </>
    );
}
