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

export const Loading = () => <div>Loading...</div>

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
