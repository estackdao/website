import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/fonts.css'


export const metadata: Metadata = {
  title:'Estack - Ethereum LST middleware',
  description:'Building the Permissionless, Trustless and Interoperable intersection middleware for Ethereum LST infrastructure.',
  keywords: ['Ethereum staking', 'LSD', 'LST'],
  metadataBase: new URL('https://estackdao.com'),
  openGraph: {
    title: 'Estack',
    description: 'Building the Permissionless, Trustless and Interoperable intersection middleware for Ethereum LST infrastructure.',
    url: 'https://estackdao.com',
    siteName: 'Estack',
    images: [
      {
        url: 'https://estackdao.com/og.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estack',
    description: 'Building the Permissionless, Trustless and Interoperable middleware for Ethereum LST infrastructure.',
    creator: '@estackdao',
    images: ['https://estackdao.com/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
