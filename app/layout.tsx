import './globals.css'

export const metadata = {
  title: 'The Planets',
  description:
    'A resource to get your facts about the Planets in our Solar System'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
