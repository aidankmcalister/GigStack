import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import UserCell from 'src/components/UserCell'

const ProfilePage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <Metadata title="Profile" description="Profile page" />

      <h1>ProfilePage</h1>
      <UserCell id={currentUser.id} />
    </>
  )
}

export default ProfilePage
