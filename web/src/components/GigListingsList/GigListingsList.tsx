import { format } from 'date-fns'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

import Button from '../Button/Button'
import InstrumentChip from '../InstrumentChip/InstrumentChip'

const ATTEND_MUTATION = gql`
  mutation AttendMutation($listingId: String!) {
    attendListing(listingId: $listingId) {
      id
    }
  }
`

const GigListingsList = ({ gigListings, notify }) => {
  return (
    <>
      {gigListings.length > 0 ? (
        <ul className="w-full space-y-3">
          {gigListings.map((listing) => (
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
  const { currentUser } = useAuth()

  const [attend, { loading }] = useMutation(ATTEND_MUTATION, {
    onCompleted: () => {
      console.log('Successfully attended listing!')
      notify({
        message: `Attending ${listing.title}.`,
        type: 'success',
      })
    },
    onError: (error) => {
      console.error('Error attending listing:', error)
    },
    refetchQueries: ['AttendingGigsQuery', 'GigListingsQuery'],
  })

  const handleClick = () => {
    attend({ variables: { listingId: listing.id } })
  }

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
      <Button className="w-36 px-10" onClick={handleClick} disabled={loading}>
        {listing.attendees.some((attendee) => attendee.id === currentUser.id)
          ? loading
            ? 'Removing...'
            : 'Stop Attending'
          : loading
          ? 'Adding...'
          : 'Attend'}
      </Button>
    </li>
  )
}
