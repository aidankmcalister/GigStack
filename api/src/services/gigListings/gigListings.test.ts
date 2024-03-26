import type { GigListing } from '@prisma/client'

import {
  gigListings,
  gigListing,
  createGigListing,
  updateGigListing,
  deleteGigListing,
} from './gigListings'
import type { StandardScenario } from './gigListings.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('gigListings', () => {
  scenario('returns all gigListings', async (scenario: StandardScenario) => {
    const result = await gigListings()

    expect(result.length).toEqual(Object.keys(scenario.gigListing).length)
  })

  scenario(
    'returns a single gigListing',
    async (scenario: StandardScenario) => {
      const result = await gigListing({ id: scenario.gigListing.one.id })

      expect(result).toEqual(scenario.gigListing.one)
    }
  )

  scenario('creates a gigListing', async () => {
    const result = await createGigListing({
      input: { title: 'String', date: '2024-03-26T19:25:32.041Z' },
    })

    expect(result.title).toEqual('String')
    expect(result.date).toEqual(new Date('2024-03-26T19:25:32.041Z'))
  })

  scenario('updates a gigListing', async (scenario: StandardScenario) => {
    const original = (await gigListing({
      id: scenario.gigListing.one.id,
    })) as GigListing
    const result = await updateGigListing({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a gigListing', async (scenario: StandardScenario) => {
    const original = (await deleteGigListing({
      id: scenario.gigListing.one.id,
    })) as GigListing
    const result = await gigListing({ id: original.id })

    expect(result).toEqual(null)
  })
})
