import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/components/language-provider' // Import the new provider

export const metadata: Metadata = {
  title: 'VisionX - AI-Powered Interactive Advertising',
  description: 'Transform your brand with AI-powered interactive advertisements that engage, convert, and captivate your audience like never before.',
  keywords: 'AI advertising, interactive ads, digital marketing, VisionX, advertising technology',
  authors: [{ name: 'VisionX Team' }],
  openGraph: {
    title: 'VisionX - AI-Powered Interactive Advertising',
    description: 'Transform your brand with AI-powered interactive advertisements that engage, convert, and captivate your audience like never before.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Remove lang="en" from html tag, LanguageProvider will manage it
    <html> 
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
