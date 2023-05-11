import type { NextApiRequest, NextApiResponse } from 'next'
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

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  // 201 Created
  return res.status(201).json(user)
}
