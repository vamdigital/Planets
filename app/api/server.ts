const isDev = process.env.NODE_ENV !== 'production' ? true : false

export const server = isDev
  ? 'http://localhost:3000'
  : 'https://planets-vam.vercel.app'
