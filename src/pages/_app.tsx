// src/pages/_app.tsx
import type { AppProps } from 'next/app'
import '../styles/global.css' // Optional: only if you make one

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
