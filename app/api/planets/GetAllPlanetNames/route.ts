// import db from '../../db/data.json'
//
// export async function GET() {
//   const Planets: Planet[] = db
//   const names = Planets.map(planet => planet.name.toLowerCase())
//   return names
// }

import path from 'path'
import { promises as fs } from 'fs'
import { NextResponse } from 'next/server'

export async function GET() {
  const jsonDirectory = path.join(process.cwd(), '/public/db')
  const fileContents = await fs.readFile(`${jsonDirectory}/data.json`)
  console.log({ fileContents })
  return NextResponse.json(fileContents)
}
