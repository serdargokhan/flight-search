export default function Footer() {
    return (
        <footer className="flex h-16 items-center border-t bg-white">
            <div className="container text-sm">
                Copyright © {new Date().getFullYear()}
            </div>
        </footer>
    );
}
