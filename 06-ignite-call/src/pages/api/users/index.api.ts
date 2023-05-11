import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'
import { prisma } from '@/lib/prisma'

/**
 * Persist user to the database
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // 405 Method Not Allowed
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, username } = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExists) {
    return res.status(400).json({
      message: 'Username already taken.',
    })
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  // Add 'Set-Cookie' to the response header
  setCookie({ res }, '@ignitecall:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/', // all routes can access it
  })

  // 201 Created
  return res.status(201).json(user)
}
