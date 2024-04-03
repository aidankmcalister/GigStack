import { useState } from 'react'

import { helix } from 'ldrs'
import toast, { Toaster } from 'react-hot-toast'
import type { PostedGigsQuery, PostedGigsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import NewListingPopout from 'src/components/NewListingPopout'

import Button from '../Button/Button'
import NewListingButton from '../NewListingButton/NewListingButton'
import PostedGigList from '../PostedGigList/PostedGigList'

export const QUERY: TypedDocumentNode<
  PostedGigsQuery,
  PostedGigsQueryVariables
> = gql`
  query PostedGigsQuery {
    gigListings: gigListingsByUser {
      id
      title
      instrumentsWanted
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

export const Success = ({ gigListings }: CellSuccessProps<PostedGigsQuery>) => {
  const [popoutOpen, setPopoutOpen] = useState(false)

  const notify = ({ message, type }) => {
    const toastMethod = type ? toast[type] : toast
    toastMethod(message)
  }

  return (
    <div className="relative w-full">
      <Toaster />
      {/* <Button
        className="mb-2 bg-main-white-brighter shadow-sm"
        onClick={() => setPopoutOpen(true)}
      >
        Create New Listing
      </Button> */}
      {/* <Button onClick={() => setPopoutOpen(true)}> */}
        <NewListingButton setPopoutOpen={setPopoutOpen} />
      {/* </Button> */}
      <PostedGigList gigListings={gigListings} notify={notify} />
      <NewListingPopout
        notify={notify}
        open={popoutOpen}
        setOpen={setPopoutOpen}
      />
    </div>
  )
}
