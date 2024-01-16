import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './bulma.sass'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lighthouse',
  description: 'Check your UCSC Autograder score',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export const runtime = 'edge'
