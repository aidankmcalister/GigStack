import { Metadata } from '@redwoodjs/web'

import GigListingsCell from 'src/components/GigListingsCell'

const HomePage = () => {
  return (
    <section className="mx-5">
      <Metadata title="Home" description="Home page" />

      <h1 className="mb-4 text-3xl">Open Gigs</h1>
      <GigListingsCell />
    </section>
  )
}

export default HomePage
