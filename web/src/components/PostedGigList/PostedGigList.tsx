import { useState } from 'react'

import { format } from 'date-fns'

import Button from '../Button/Button'
import EditListingPopout from '../EditListingPopout/EditListingPopout'
import InstrumentChip from '../InstrumentChip/InstrumentChip'

const PostedGigList = ({ gigListings, notify }) => {
  const sortedGigListings = gigListings.slice().sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateA - dateB
  })

  return (
    <>
      {sortedGigListings.length > 0 ? (
        <ul className="space-y-3">
          {sortedGigListings.map((listing) => (
            <ListingItem key={listing.id} listing={listing} notify={notify} />
          ))}
        </ul>
      ) : (
        <p>No Listings</p>
      )}
    </>
  )
}

const ListingItem = ({ listing, notify }) => {
  const [popoutOpen, setPopoutOpen] = useState(false)

  return (
    <li className="flex justify-between rounded-md border bg-main-white-brighter p-5 shadow-md">
      <div>
        <div className="flex items-center space-x-2">
          <p className="text-xl font-medium">{listing.title}</p>
          <div className="flex items-center space-x-2 text-main-gray">
            <img
              src={`https://robohash.org/${listing.creator.id}`}
              alt={listing.creator.name}
              className="w-7 rounded-full border"
            />
            <p>{listing.creator.name}</p>
          </div>
        </div>
        <p className="mb-3 mt-2">{format(new Date(listing.date), 'PPPP')}</p>
        <ul className="flex space-x-2">
          {listing.instrumentsWanted.map((instrument) => (
            <InstrumentChip key={instrument} instrument={instrument} />
          ))}
        </ul>
      </div>
      <Button
        onClick={() => {
          setPopoutOpen(true)
        }}
      >
        Edit
      </Button>
      <EditListingPopout
        listing={listing}
        open={popoutOpen}
        setOpen={setPopoutOpen}
        notify={notify}
      />
    </li>
  )
}

export default PostedGigList
