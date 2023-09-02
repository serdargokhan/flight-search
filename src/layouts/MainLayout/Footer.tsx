export default function Footer() {
    return (
        <footer className="flex h-16 items-center border-t bg-gray-50">
            <div className="container text-sm">
                Copyright © {new Date().getFullYear()}
            </div>
        </footer>
    );
}
