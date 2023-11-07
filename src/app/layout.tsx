import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/themes/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Universidade Católica',
  description: 'Aplicação web do setor de protocolos da UNICAP',
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
