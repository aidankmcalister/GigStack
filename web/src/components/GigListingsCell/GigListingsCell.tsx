import { useState } from 'react'

import toast, { Toaster } from 'react-hot-toast'
import type { GigListingsQuery, GigListingsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Button from '../Button/Button'
import GigListingsList from '../GigListingsList/GigListingsList'
import NewListingPopout from '../NewListingPopout/NewListingPopout'

export const QUERY: TypedDocumentNode<
  GigListingsQuery,
  GigListingsQueryVariables
> = gql`
  query GigListingsQuery {
    gigListings {
      id
      title
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

// export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  gigListings,
}: CellSuccessProps<GigListingsQuery>) => {
  const [popoutOpen, setPopoutOpen] = useState(false)

  const notify = ({ message, type }) => {
    const toastMethod = type ? toast[type] : toast
    toastMethod(message)
  }

  return (
    <>
      <Toaster />
      <Button className="mb-3" onClick={() => setPopoutOpen(true)}>
        Create New Listing
      </Button>
      <GigListingsList notify={notify} gigListings={gigListings} />
      <NewListingPopout
        notify={notify}
        open={popoutOpen}
        setOpen={setPopoutOpen}
      />
    </>
  )
}
