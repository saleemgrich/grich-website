// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
    return (
        <header>
            {/* Top bar */}
            <div className="bg-blue-700 text-white text-sm py-2 px-4 flex justify-between items-center">
                <div className="flex space-x-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <span>📸 Instagram</span>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <span>📘 Facebook</span>
                    </a>
                </div>
                <Link href="/contact">
                    <button className="bg-white text-blue-700 px-4 py-1 rounded hover:bg-gray-100">
                        Schedule a Consult
                    </button>
                </Link>
            </div>

            {/* Main nav */}
            <nav className="bg-white shadow p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Dad's Construction</h1>
                    <ul className="flex space-x-6">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
