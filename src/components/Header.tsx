// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
    return (
        <header>
            {/* Top bar */}
            <div className="bg-blue-700 text-white text-sm py-2 px-4 flex flex-wrap justify-between items-center gap-2">
                <div className="flex space-x-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gray-200">
                        <span>📸</span>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gray-200">
                        <span>📘</span>
                    </a>
                </div>
                <Link href="/contact">
                    <button className="bg-white text-blue-700 font-medium px-4 py-1 rounded hover:bg-gray-100 shadow-sm">
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
