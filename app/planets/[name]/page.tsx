// import { server } from '@planets/app/api/server'
import Planets from 'app/api/db/data.json'
import { PageWrapper } from '@planets/app/components/PageWrapper'
import { Pills } from '@planets/app/components/Pills'
import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
  return Planets.map(res => ({
    name: res.name.toLowerCase()
  }))
}

export default async function Page({ params }: { params: { name: string } }) {
  const Planet = Planets.reduce<Planet>((acc, curr) => {
    if (curr.name.toLowerCase() === params.name) acc = curr
    return acc
  }, {} as Planet)

  return (
    <PageWrapper>
      <div className="flex flex-col mt-[-20px] md:max-w-[800px] md:mt-16 max-w-[1000px] mx-auto md:px-4 md:min-h-[60vh] md:justify-center lg:flex-row lg:items-center lg:gap-20 ">
        {/* Planet internal Links */}
        <div className="flex w-full gap-4 md:hidden border-b-[1px] border-slate-500 mb-16 justify-center items-center">
          <Link href="" className="py-4 px-6 w-full text-center md:text-left">
            Overview
          </Link>
          <Link href="" className="py-4 px-6 w-full text-center md:text-left">
            Structure
          </Link>
          <Link href="" className="py-4 px-6 w-full text-center md:text-left">
            Geology
          </Link>
        </div>

        <div className="flex flex-col items-center px-4 lg:max-w-[800px] lg:w-[100%] ">
          <div className="flex md:hidden">
            <Image
              src={Planet.images.planet}
              alt={Planet.name}
              width={200}
              height={200}
              className="floating"
            />
          </div>

          <div className="hidden md:flex lg:hidden">
            <Image
              src={Planet.images.planet}
              alt={Planet.name}
              width={300}
              height={300}
              className="floating"
            />
          </div>
          <div className="hidden lg:flex">
            <Image
              src={Planet.images.planet}
              alt={Planet.name}
              width={600}
              height={600}
              className="floating"
            />
          </div>
        </div>
        {/**/}
        <div className="flex p-4 my-8 justify-center flex-col md:flex-row items-center md:items-center lg:flex-col gap-16">
          <div className="flex flex-col md:w-[700px] text-center md:text-left lg:w-[100%] lg:max-w-[700px]">
            <h1 className="text-4xl uppercase font-heading pb-4 md:pb-8">
              {Planet.name}
            </h1>
            <p className="font-body text-center md:text-left pb-8">
              {Planet.overview.content}
            </p>
            <span className="text-slate-400 font-body pb-7">
              Source:
              <a
                href={Planet.overview.source}
                title="wikipedia source"
                target="_blank"
                className="px-2 underline font-bold"
              >
                Wikipedia <span className="text-[10px]">🔗</span>
              </a>
            </span>
          </div>
          <div className="hidden md:flex flex-col w-full gap-4">
            <Link
              href=""
              className="border-[1px] border-slate-500 py-4 px-6 w-full text-left"
            >
              01. Overview
            </Link>
            <Link
              href=""
              className="border-[1px] border-slate-500 py-4 px-6 w-full text-left"
            >
              02. Internal Structure
            </Link>
            <Link
              href=""
              className="border-[1px] border-slate-500 py-4 px-6 w-full text-left"
            >
              03. Surface Geology
            </Link>
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
