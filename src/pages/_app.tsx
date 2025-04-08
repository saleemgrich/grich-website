// src/pages/_app.tsx
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

import '../styles/global.css'
import Image from "next/image";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <div className="image-wrapper">
                <Image
                    src="/temp-hero-design.png"
                    alt="Company Logo"
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
            <Navigation />
            <Component {...pageProps} />
        </>
    )
}