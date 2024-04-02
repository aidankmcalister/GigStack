import { helix } from 'ldrs'
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
  query FindUserQuery {
    user {
      id
      email
      name
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
