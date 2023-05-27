import { NextResponse, NextRequest } from 'next/server'
import db from '../../db/data.json'

export async function GET(request: NextRequest) {
  const Planets: Planet[] = db
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')
  const Planet: Planet | undefined = Planets.find(
    planet => planet.name.toLowerCase() === name?.toLowerCase()
  )
  if (!Planet) {
    return NextResponse.json({
      message: `Planet with the name: ${name} does not exist`
    })
  }

  return Planet
}
