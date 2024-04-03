import { useState } from 'react'

import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid'
import { helix } from 'ldrs'
import Select from 'react-select'
import type { GigListingsQuery, GigListingsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

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
  const [sortByNewest, setSortByNewest] = useState(false)
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

  const filterByInstruments = (listings) => {
    if (selectedInstruments.length === 0) {
      return listings
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
        <button
          onClick={toggleSortOrder}
          className="flex w-[6.5rem] items-center justify-between rounded-md border border-main-orange/80 bg-main-white-brighter px-2 py-1 font-medium text-main-orange/80 hover:bg-main-orange/30 hover:text-main-orange"
        >
          {sortByNewest ? (
            <>
              Latest
              <ArrowDownIcon className="w-5" />
            </>
          ) : (
            <>
              Soonest
              <ArrowUpIcon className="w-5" />
            </>
          )}
        </button>
        <Select
          closeMenuOnSelect={false}
          isMulti
          isClearable
          isSearchable
          options={dropdownOptions}
          value={selectedInstruments}
          onChange={setSelectedInstruments}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
            option: (base, { isFocused }) => ({
              ...base,
              color: isFocused ? 'white' : 'black',
            }),
            multiValue: (styles) => ({
              ...styles,
              backgroundColor: 'rgba(255, 136, 17, 0.2)',
            }),
            multiValueLabel: (styles) => ({
              ...styles,
              color: 'rgba(255, 136, 17, 1)',
            }),
            multiValueRemove: (styles) => ({
              ...styles,
              color: 'rgba(255, 136, 17, 1)',
            }),
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: 'rgba(255, 136, 17, 0.7)',
              primary: 'rgba(255, 136, 17, 0.8)',
            },
          })}
          className="w-96"
        />
      </div>

      {filteredGigListings.length > 0 ? (
        <GigListingsList gigListings={filteredGigListings} />
      ) : (
        <p className="w-full text-center">No listings yet</p>
      )}
    </>
  )
}
