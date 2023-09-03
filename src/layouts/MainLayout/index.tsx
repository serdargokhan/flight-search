import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type MainLayoutProps = {
    children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="background-dot-pattern flex-1">{children}</main>
            <Footer />
        </div>
    );
}
