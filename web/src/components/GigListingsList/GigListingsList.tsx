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

export default GigListingsList

const ListingItem = ({ listing }) => {
  // const [popoutOpen, setPopoutOpen] = useState(false)

  return (
    <li className="border rounded-md shadow-md p-5 flex justify-between">
      <div>
        <p>{listing.title}</p>
        <p>{format(addDays(new Date(listing.date), 1), 'PPPP')}</p>
      </div>
      <Button onClick={() => console.log(`attend ${listing.id}`)}>
        Attend
      </Button>
      {/* <Button
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
      /> */}
    </li>
  )
}
