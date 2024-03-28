import type { Prisma, GigListing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GigListingCreateArgs>({
  gigListing: {
    one: {
      data: {
        title: 'String',
        date: '2024-03-28T17:10:04.378Z',
        creator: {
          create: {
            email: 'String1511812',
            instrumentsPlayed: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        date: '2024-03-28T17:10:04.378Z',
        creator: {
          create: {
            email: 'String4548114',
            instrumentsPlayed: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<GigListing, 'gigListing'>
