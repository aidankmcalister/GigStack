import { helix } from 'ldrs'
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
        avatar
      }
    }
  }
`

// Default values shown

export const Loading = () => {
  helix.register()
  return (
    <div className="flex h-96 items-center justify-center">
      <l-helix size="70" speed="2.5" color="#FF8811"></l-helix>
    </div>
  )
}

// export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  gigListings,
}: CellSuccessProps<GigListingsQuery>) => {
  return (
    <>
      <GigListingsList gigListings={gigListings} notify={''} />
    </>
  )
}
