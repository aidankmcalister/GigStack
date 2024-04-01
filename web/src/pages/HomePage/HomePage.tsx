import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import GigListingsCell from 'src/components/GigListingsCell'

const HomePage = () => {
  const { currentUser } = useAuth()
  return (
    <section className="mx-5">
      <Metadata title="Home" description="Home page" />

      {currentUser && currentUser.name === null && (
        <Link to={routes.profile()}>Complete Profile</Link>
      )}

      <h1 className="mb-4 text-3xl">Open Gigs</h1>
      <GigListingsCell />
    </section>
  )
}

export default HomePage
