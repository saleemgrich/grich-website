// src/pages/_app.tsx
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Navigation from '../components/Header'

import '../styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Navigation />
            <Component {...pageProps} />
        </>
    )
}