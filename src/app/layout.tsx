import type { Metadata } from 'next'
import { Overpass, Ubuntu } from 'next/font/google'

import '@/styles/globals.css'

const overpass = Overpass({
  subsets: ['latin'],
  weight: ['300', '600'],
  variable: '--font-overpass',
})

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ubuntu',
})

export const metadata: Metadata = {
  title: 'Frontend Mentor | [Blogr]',
  description:
    'Blogging web app created as a practice project form Frontend Mentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${overpass.variable} ${ubuntu.variable}`}>
      <body>{children}</body>
    </html>
  )
}
