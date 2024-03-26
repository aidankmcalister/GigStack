import { useState } from 'react'

import { addDays, format } from 'date-fns'
import { enUS } from 'date-fns/locale'

import Button from '../Button/Button'
import EditListingPopout from '../EditListingPopout/EditListingPopout'

const GigListingsList = ({ gigListings, notify }) => {
  const sortedGigListings = gigListings.slice().sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateA - dateB
  })

  return (
    <>
      {sortedGigListings.length > 0 ? (
        <ul>
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

export default GigListingsList

const ListingItem = ({ listing, notify }) => {
  const [popoutOpen, setPopoutOpen] = useState(false)
  return (
    <li>
      <EditListingPopout
        listing={listing}
        open={popoutOpen}
        setOpen={setPopoutOpen}
        notify={notify}
      />
      <p>{listing.title}</p>
      <p>{format(addDays(new Date(listing.date), 1), 'PPPP')}</p>
      <Button
        onClick={() => {
          setPopoutOpen(true)
        }}
      >
        Edit
      </Button>
    </li>
  )
}
