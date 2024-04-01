import type { FindUserQuery, FindUserQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import UserInfoForm from '../UserInfoForm/UserInfoForm'

export const QUERY: TypedDocumentNode<
  FindUserQuery,
  FindUserQueryVariables
> = gql`
  query FindUserQuery($id: Int!) {
    user: user(id: $id) {
      id
      email
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUserQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  user,
}: CellSuccessProps<FindUserQuery, FindUserQueryVariables>) => {
  return (
    <div>
      <UserInfoForm user={user} />
    </div>
  )
}
