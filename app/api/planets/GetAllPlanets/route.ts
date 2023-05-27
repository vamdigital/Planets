import db from '../../db/data.json'

export async function GET() {
  const Planets: Planet[] = db
  return Planets
}
