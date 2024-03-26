import type { Prisma, GigListing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.GigListingCreateArgs>({
  gigListing: {
    one: { data: { title: 'String', date: '2024-03-26T19:25:32.053Z' } },
    two: { data: { title: 'String', date: '2024-03-26T19:25:32.053Z' } },
  },
})

export type StandardScenario = ScenarioData<GigListing, 'gigListing'>
