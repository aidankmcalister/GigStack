import { useState } from 'react'

import toast, { Toaster } from 'react-hot-toast'
import type { PostedGigsQuery, PostedGigsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import NewListingPopout from 'src/components/NewListingPopout'

import Button from '../Button/Button'
import PostedGigList from '../PostedGigList/PostedGigList'

export const QUERY: TypedDocumentNode<
  PostedGigsQuery,
  PostedGigsQueryVariables
> = gql`
  query PostedGigsQuery {
    gigListings: gigListingsByUser {
      id
      title
      createdAt
      date
      creator {
        id
        name
        listingsCreated {
          id
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ gigListings }: CellSuccessProps<PostedGigsQuery>) => {
  const [popoutOpen, setPopoutOpen] = useState(false)

  const notify = ({ message, type }) => {
    const toastMethod = type ? toast[type] : toast
    toastMethod(message)
  }

  return (
    <ul>
      <Toaster />
      <Toaster />
      <Button className="mb-3" onClick={() => setPopoutOpen(true)}>
        Create New Listing
      </Button>
      <PostedGigList gigListings={gigListings} notify={notify} />
      <NewListingPopout
        notify={notify}
        open={popoutOpen}
        setOpen={setPopoutOpen}
      />
    </ul>
  )
}
