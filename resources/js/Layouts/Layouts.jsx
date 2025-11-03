import { Link } from "@inertiajs/react";

export default function Layouts({ children }) {
    return (
        <>
            {/* Navbar */}
            <header className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 shadow-md">
                <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white">
                    <h1 className="text-xl font-extrabold tracking-wide">
                        Pahlawan<span className="text-orange-200">App</span>
                    </h1>

                    <div className="flex gap-6 text-sm font-medium">
                        <Link
                            href="/"
                            className="hover:text-yellow-200 transition duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            href="/posts/create"
                            className="hover:text-yellow-200 transition duration-200"
                        >
                            Create
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Main content */}
            <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
                <div className="max-w-5xl mx-auto px-4 py-10">
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t text-center py-4 text-sm text-gray-500">
                © {new Date().getFullYear()} PahlawanApp — Made with ❤️ by Pip
            </footer>
        </>
    );
}
