import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.BookCreateArgs>({
  book: {
    one: {
      data: {
        title: 'String',
        author: 'String',
        updatedAt: '2022-04-27T02:04:23Z',
      },
    },
    two: {
      data: {
        title: 'String',
        author: 'String',
        updatedAt: '2022-04-27T02:04:23Z',
      },
    },
  },
})

export type StandardScenario = typeof standard
