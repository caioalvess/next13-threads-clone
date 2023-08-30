import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

import '../globals.css'

export const matadata = {
    title: 'Threads',
    description: 'A next.js 13 Meta Threads Application'
}

const inter = Inter({ subsets: ['latin'] })

type LayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}