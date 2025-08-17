import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mike Riley - Personal Website',
  description: 'Personal website and portfolio of Mike Riley - Developer, Creator, and Tech Enthusiast',
  keywords: ['Mike Riley', 'Developer', 'Portfolio', 'Personal Website'],
  authors: [{ name: 'Mike Riley' }],
  creator: 'Mike Riley',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rileydotcom.com',
    title: 'Mike Riley - Personal Website',
    description: 'Personal website and portfolio of Mike Riley',
    siteName: 'Mike Riley',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
