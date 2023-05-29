import Planets from 'app/api/db/data.json'
import { PageWrapper } from '@planets/app/components/PageWrapper'
import { Pills } from '@planets/app/components/Pills'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'

export async function generateStaticParams() {
  return Planets.map(res => [
    {
      name: res.name.toLowerCase()
    }
  ])
}

export default async function Page({
  params
}: {
  params: {
    name: string[]
  }
}) {
  const Planet = Planets.reduce<Planet>((acc, curr) => {
    if (curr.name.toLowerCase() === params.name[0]) acc = curr
    return acc
  }, {} as Planet)

  const idx =
    params.name[1] === 'overview'
      ? 'overview'
      : params.name[1] === 'structure'
      ? 'structure'
      : 'geology'

  const imgSrc =
    params.name[1] === 'overview'
      ? 'planet'
      : params.name[1] === 'structure'
      ? 'internal'
      : 'geology'

  const planetKeys = Object.keys(Planet)
  const innerLinks = planetKeys.slice(1, 4)

  return (
    <PageWrapper>
      <div className="flex flex-col mt-[-20px] md:max-w-[800px] md:mt-16 max-w-[1000px] mx-auto md:px-4 md:min-h-[60vh] md:justify-center lg:flex-row lg:items-center lg:gap-20 ">
        <div className="flex w-full gap-4 md:hidden border-b-[1px] border-slate-500 mb-16 justify-center items-center">
          {innerLinks.map(link => (
            <Link
              href={`planets/${params.name[0]}/${link}`}
              className="py-4 px-6 w-full text-center md:text-left capitalize"
              key={link}
            >
              {link}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center px-4 lg:max-w-[800px] lg:w-[100%] ">
          <div className="flex md:hidden">
            <Image
              src={Planet.images[imgSrc]}
              alt={Planet.name}
              width={200}
              height={200}
              className="floating"
            />
          </div>
          {/**/}
          <div className="hidden md:flex lg:hidden">
            <Image
              src={Planet.images[imgSrc]}
              alt={Planet.name}
              width={300}
              height={300}
              className="floating"
            />
          </div>
          <div className="hidden lg:flex">
            <Image
              src={Planet.images[imgSrc]}
              alt={Planet.name}
              width={600}
              height={600}
              className="floating"
            />
          </div>
        </div>
        <div className="flex p-4 my-8 justify-center flex-col md:flex-row items-center md:items-center lg:flex-col gap-16">
          <div className="flex flex-col md:w-[700px] text-center md:text-left lg:w-[100%] lg:max-w-[700px]">
            <h1 className="text-4xl uppercase font-heading pb-4 md:pb-8">
              {Planet.name} - {params.name.slice(1)}
            </h1>
            <p className="font-body text-center md:text-left pb-8">
              {Planet[idx].content}
            </p>
            <span className="text-slate-400 font-body pb-7">
              Source:
              <a
                href={Planet[idx].source}
                title="wikipedia source"
                target="_blank"
                className="px-2 underline font-bold"
              >
                Wikipedia <span className="text-[10px]">🔗</span>
              </a>
            </span>
          </div>
          <div className="hidden md:flex flex-col w-full gap-4">
            {innerLinks.map((link, index) => (
              <Link
                href={`planets/${params.name[0]}/${link}`}
                className="border-[1px] border-slate-500 py-4 px-6 w-full text-left capitalize"
                key={link}
              >
                {`0${index + 1}. ${link}`}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full px-6 md:px-0 flex-col md:flex-row gap-3 md:gap-4 md:max-w-[750px] md:mx-auto lg:max-w-[750px]">
        <Pills label="rotation" info={Planet.rotation} />
        <Pills label="revolution time" info={Planet.revolution} />
        <Pills label="radius" info={Planet.radius} />
        <Pills label="average temp." info={Planet.temperature} />
      </div>
    </PageWrapper>
  )
}
