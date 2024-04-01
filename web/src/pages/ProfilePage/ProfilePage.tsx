import { useState, useEffect } from 'react'

import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import UserCell from 'src/components/UserCell'

const ProfilePage = () => {
  const { currentUser } = useAuth()
  const [renderUserCell, setRenderUserCell] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderUserCell(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Metadata title="Profile" description="Profile page" />
      <section className="mx-auto w-[90%] flex flex-col items-center space-y-3">
        <h1 className="text-2xl font-semibold">Profile</h1>
        {/* <p>{JSON.stringify(currentUser)}</p> */}
        {renderUserCell && <UserCell id={currentUser.id} />}
      </section>
    </>
  )
}

export default ProfilePage
