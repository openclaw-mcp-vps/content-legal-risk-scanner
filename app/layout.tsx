import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LegalScan — Scan Content for Legal Risks Before Publishing',
  description: 'AI-powered scanner that checks blog posts, marketing copy, and social media for potential trademark, copyright, and defamation issues.',
  keywords: 'legal risk scanner, trademark checker, copyright checker, content compliance, defamation checker',
  openGraph: {
    title: 'LegalScan — Scan Content for Legal Risks Before Publishing',
    description: 'AI-powered scanner that checks blog posts, marketing copy, and social media for potential trademark, copyright, and defamation issues.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="60e93c94-2dc8-418d-b96f-6b49848a6d3a"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
