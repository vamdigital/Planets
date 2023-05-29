import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-[80vh] justify-center flex-col md:flex-row items-center p-4 pt-0 md:justify-space-evenly md:max-w-[700px] lg:max-w-[960px] mx-auto">
      <div className="relative flex mb-12 min-h-[200px] md:w-full max-w-[300px] md:order-2  xl:min-w[auto] mx-auto">
        <Image
          src="/assets/home/all-planets.svg"
          priority
          width={300}
          height={300}
          alt="all planets"
          className="scale-125 md:scale-150 text-center"
        />
      </div>
      <div className="flex flex-col max-w-[500px] justify-center items-center md:items-start">
        <h1 className="flex text-center md:text-left text-3xl md:text-7xl font-heading leading-snug md:leading-tight mb-5">
          The Universe is a pretty Big Space to explore
        </h1>
        <p className="flex text-center md:text-left text-sm text-slate-400 pb-6">
          Let&apos;s begin your immersive space experience
        </p>
        <Link
          href="/planets/mercury/overview"
          className="border-[1px] border-slate-400 w-[50%] py-4 font-heading leading-tight text-center uppercase text-lg flex justify-center"
        >
          Start
        </Link>
      </div>
    </main>
  )
}
