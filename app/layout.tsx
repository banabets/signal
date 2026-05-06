import type { Metadata } from 'next'
import { VT323 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const vt323 = VT323({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: 'THE SIGNAL - Not a Coin. A Transmission.',
  description: 'Only the chosen receive it. The Signal is eternal.',
  icons: {
    icon: [{ url: '/sgm.png', type: 'image/png' }],
    apple: '/sgm.png',
    shortcut: '/sgm.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${vt323.variable} bg-background`}>
      <body className="font-mono antialiased scanlines">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
