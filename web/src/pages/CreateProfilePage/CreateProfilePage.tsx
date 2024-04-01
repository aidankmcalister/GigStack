import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import UserCell from 'src/components/UserCell'
const CreateProfilePage = () => {
  const { currentUser } = useAuth()
  console.log(currentUser)
  return (
    <>
      <Metadata title="CreateProfile" description="CreateProfile page" />
      {/* <p>{JSON.stringify(currentUser)}</p> */}
      <p>Please complete</p>
      <UserCell id={currentUser.id} />
    </>
  )
}

export default CreateProfilePage
