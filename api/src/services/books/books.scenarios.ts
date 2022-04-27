import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.BookCreateArgs>({
  book: {
    one: {
      data: {
        title: 'String',
        author: 'String',
        copiesAvailable: 9776229,
        publishedAt: '2022-04-26T15:21:04Z',
        updatedAt: '2022-04-26T15:21:04Z',
      },
    },
    two: {
      data: {
        title: 'String',
        author: 'String',
        copiesAvailable: 4157302,
        publishedAt: '2022-04-26T15:21:04Z',
        updatedAt: '2022-04-26T15:21:04Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
