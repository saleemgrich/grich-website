// src/components/Navigation.tsx
import Link from "next/link";

export default function Navigation() {
    return (
        <header>
            {/* Main nav */}
            <nav className="main-nav">
                <div className="nav-container">
                    <ul className="nav-links">
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