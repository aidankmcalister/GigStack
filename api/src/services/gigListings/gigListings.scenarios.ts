import type { Prisma, GigListing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GigListingCreateArgs>({
  gigListing: {
    one: {
      data: {
        title: 'String',
        date: '2024-03-28T17:45:06.362Z',
        creator: {
          create: {
            email: 'String9036800',
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
        date: '2024-03-28T17:45:06.362Z',
        creator: {
          create: {
            email: 'String6255652',
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
