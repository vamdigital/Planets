import VercelLogo from '@planets/public/assets/next.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <VercelLogo width={100} height={100} />
      <h1 className="text-7xl">The Planets</h1>
      <h2 className="text-planet-h2 font-heading text-jupiter">Jupiter</h2>
      <p className="text-planet-body font-body text-earth">Planet we live on</p>
    </main>
  )
}
