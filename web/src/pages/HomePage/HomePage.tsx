import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import GigListingsCell from 'src/components/GigListingsCell'

const HomePage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <Metadata title="Home" description="Home page" />

      {currentUser && currentUser.name === null && (
        <Link to={routes.profile()}>Complete Profile</Link>
      )}
      <section className="mx-5 flex w-[90%] flex-col items-center space-y-3">
        <h1 className="text-3xl font-semibold">Open Gigs</h1>
        <GigListingsCell />
      </section>
    </>
  )
}

export default HomePage
