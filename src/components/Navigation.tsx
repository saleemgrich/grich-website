// src/components/Navigation.tsx
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {

    const router = useRouter();
    return (
        <header>
            <nav className="main-nav">
                <div className="nav-container">
                    <ul className="nav-links">
                        <li>
                            <Link
                                href="/"
                                className={router.pathname === "/" ? "active-link" : ""}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className={router.pathname === "/services" ? "active-link" : ""}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className={router.pathname === "/projects" ? "active-link" : ""}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={router.pathname === "/contact" ? "active-link" : ""}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}