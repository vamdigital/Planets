import { Antonio, League_Spartan } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'The Planets',
  description:
    'A resource to get your facts about the Planets in our Solar System'
}

const antonio = Antonio({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
  variable: '--font-antonio'
})

const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-spartan'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${antonio.variable} ${spartan.variable}`}>
      <body>{children}</body>
    </html>
  )
}
