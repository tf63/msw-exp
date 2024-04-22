'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: ReactNode }) {
    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            // 非同期インポートで worker をロード
            import('../mock/index')
                .then(({ worker }) => {
                    if (worker) {
                        worker.start()
                    }
                })
                .catch((err) => console.error('Failed to start MSW:', err))
        }
    }, [])

    return (
        <html lang="ja">
            <head>
                <title>{'Default Title'}</title>
                <meta name="description" content={'Default description'} />
            </head>
            <body>{children}</body>
        </html>
    )
}
