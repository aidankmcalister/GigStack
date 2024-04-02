import { useState } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { helix } from 'ldrs'
import Select from 'react-select'
import type { GigListingsQuery, GigListingsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Button from '../Button/Button'
import GigListingsList from '../GigListingsList/GigListingsList'

export const QUERY: TypedDocumentNode<
  GigListingsQuery,
  GigListingsQueryVariables
> = gql`
  query GigListingsQuery {
    gigListings {
      id
      title
      date
      instrumentsWanted
      creator {
        id
        name
        email
      }
    }
  }
`

const dropdownOptions = [
  { value: 'guitar', label: 'Guitar' },
  { value: 'piano', label: 'Piano' },
  { value: 'drums', label: 'Drums' },
  { value: 'bass', label: 'Bass' },
  { value: 'voice', label: 'Voice' },
  { value: 'saxophone', label: 'Saxophone' },
  { value: 'violin', label: 'Violin' },
  { value: 'trumpet', label: 'Trumpet' },
  { value: 'flute', label: 'Flute' },
  { value: 'clarinet', label: 'Clarinet' },
  { value: 'harp', label: 'Harp' },
]

export const Loading = () => {
  helix.register()
  return (
    <div className="flex h-96 items-center justify-center">
      <l-helix size="70" speed="2.5" color="#FF8811"></l-helix>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  gigListings,
}: CellSuccessProps<GigListingsQuery>) => {
  const [sortByNewest, setSortByNewest] = useState(true)
  const [selectedInstruments, setSelectedInstruments] = useState([])

  const handleSort = () => {
    return gigListings.slice().sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return sortByNewest ? dateB - dateA : dateA - dateB
    })
  }

  const toggleSortOrder = () => {
    setSortByNewest((prevSortByNewest) => !prevSortByNewest)
  }

  // Function to filter gig listings by selected instruments
  const filterByInstruments = (listings) => {
    if (selectedInstruments.length === 0) {
      return listings // If no instruments selected, return all listings
    }
    return listings.filter((listing) =>
      selectedInstruments.every((instrument) =>
        listing.instrumentsWanted.includes(instrument.value)
      )
    )
  }

  const sortedGigListings = handleSort()
  const filteredGigListings = filterByInstruments(sortedGigListings)

  return (
    <>
      <div className="flex space-x-3">
        <Button
          onClick={toggleSortOrder}
          className="flex items-center bg-main-white-brighter font-medium"
        >
          Date
          {sortByNewest ? (
            <ChevronUpIcon className="ml-1 w-5" />
          ) : (
            <ChevronDownIcon className="ml-1 w-5" />
          )}
        </Button>
        <Select
          closeMenuOnSelect={false}
          isMulti
          options={dropdownOptions}
          value={selectedInstruments}
          onChange={setSelectedInstruments}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }}
          className="w-96"
        />
      </div>

      {filteredGigListings.length > 0 ? (
        <GigListingsList gigListings={filteredGigListings} />
      ) : (
        <p>No Listings</p>
      )}
    </>
  )
}
