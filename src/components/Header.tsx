// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
    return (
        <header>
            {/* Top bar */}
            <div className="top-bar">
                <div className="social-links">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        📸
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        📘
                    </a>
                </div>
                <Link href="/contact">
                    <button className="schedule-button">Schedule a Consult</button>
                </Link>
            </div>
        </header>
    );
}
