import { Antonio, League_Spartan } from 'next/font/google'
import Image from 'next/image'
import './globals.css'
import { Header } from '@planets/app/components/Header'
import DB from '@planets/app/api/db/data.json'

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

const getPlanetNames = async () => {
  const linkUrls = DB.reduce<string[]>((acc, curr) => {
    const name = curr.name.toLowerCase()
    acc.push(name)
    return acc
  }, [])

  return linkUrls
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const linkUrls = await getPlanetNames()

  return (
    <html lang="en" className={`${antonio.variable} ${spartan.variable}`}>
      <body>
        <Header linkUrls={linkUrls} />
        <Image
          src="/assets/icons/background-stars.svg"
          alt="background-starry"
          fill
          priority
          className="-z-10 bg-planet-primary object-cover"
        />
        {children}
      </body>
    </html>
  )
}
