import { z } from 'zod'
import { getServerSession } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'
import { prisma } from '@/lib/prisma'

// since this is a different layer we don't reuse the types created
// in the "register/time-intervals" in order to keep them separated
// NOTE: we are not doing it now but we should add some
// validation/sanitisation in here
const timeIntervalsBodySchema = z.object({
  intervals: z.array(
    z.object({
      weekDay: z.number(),
      startTimeInMinutes: z.number(),
      endTimeInMinutes: z.number(),
    }),
  ),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  // Get logged user info from cookies
  // https://next-auth.js.org/configuration/nextjs#getserversession
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(401).end()
  }

  const { intervals } = timeIntervalsBodySchema.parse(req.body)

  // since sqlite does not allow multiple inserts we can't use createMany()
  // await prisma.userTimeInterval.createMany()

  // workaround for multiple insertions in sqlite
  await Promise.all(
    intervals.map((interval) => {
      return prisma.userTimeInterval.create({
        data: {
          user_id: session.user?.id,
          week_day: interval.weekDay,
          time_start_in_minutes: interval.startTimeInMinutes,
          time_end_in_minutes: interval.endTimeInMinutes,
        },
      })
    }),
  )

  // following CQRS pattern (Command Query Responsibility Segregation)
  // not returning any kind of data from a registration endpoint. E.g:
  // - Command endpoint: does not return data
  // - Query endpoint: return data
  return res.status(201).end()
}
