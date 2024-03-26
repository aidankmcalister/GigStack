import { Metadata } from '@redwoodjs/web'

import GigListingsCell from 'src/components/GigListingsCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <GigListingsCell />
    </>
  )
}

export default HomePage
