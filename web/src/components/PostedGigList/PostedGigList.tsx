import { useState } from 'react'

import { addDays, format } from 'date-fns'

import Button from '../Button/Button'
import EditListingPopout from '../EditListingPopout/EditListingPopout'

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
        <p className="text-xl font-medium">{listing.title}</p>
        <p className="">{format(addDays(new Date(listing.date), 1), 'PPPP')}</p>
        <div className="flex items-center space-x-2 text-gray-500/70">
          <img
            src={`https://robohash.org/${listing.creator.id}`}
            alt={listing.creator.name}
            className="w-7 rounded-full border"
          />
          <p>{listing.creator.name}</p>
        </div>
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
