import type { Prisma, GigListing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GigListingCreateArgs>({
  gigListing: {
    one: {
      data: {
        title: 'String',
        date: '2024-04-02T03:49:12.449Z',
        instrumentsWanted: 'String',
        creator: {
          create: {
            email: 'String2778630',
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
        date: '2024-04-02T03:49:12.449Z',
        instrumentsWanted: 'String',
        creator: {
          create: {
            email: 'String25639',
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
