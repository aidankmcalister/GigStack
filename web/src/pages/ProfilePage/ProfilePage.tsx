import { useState, useEffect } from 'react'



import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import UserCell from 'src/components/UserCell'

const ProfilePage = () => {
  const { currentUser } = useAuth()
  const [renderUserCell, setRenderUserCell] = useState(false)

  useEffect(() => {
    if (currentUser) {
      setRenderUserCell(true)
    }
  }, [currentUser])



  return (
    <>
      <Metadata title="Profile" description="Profile page" />

      <section className="mx-auto flex w-[90%] flex-col items-center space-y-3">
        <h1 className="text-3xl font-semibold">Profile</h1>
        {renderUserCell && <UserCell id={currentUser.id} />}
      </section>
    </>
  )
}

export default ProfilePage
