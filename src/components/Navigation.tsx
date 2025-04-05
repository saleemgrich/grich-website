// src/components/Navigation.tsx
import Link from "next/link";

export default function Navigation() {
    return (
        <header>
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