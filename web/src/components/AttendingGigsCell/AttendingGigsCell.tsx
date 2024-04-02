import type {
  AttendingGigsQuery,
  AttendingGigsQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  AttendingGigsQuery,
  AttendingGigsQueryVariables
> = gql`
  query AttendingGigsQuery {
    gigListings: user {
      id
      name
      listingsAttending {
        id
        title
        date
        instrumentsWanted
        creator {
          id
          name
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

export const Success = ({
  gigListings,
}: CellSuccessProps<AttendingGigsQuery>) => {
  return (
    <ul>
      {gigListings.listingsAttending.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
