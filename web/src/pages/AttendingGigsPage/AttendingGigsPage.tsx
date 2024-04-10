import { Metadata } from '@redwoodjs/web'

import AttendingGigsCell from 'src/components/AttendingGigsCell'

const AttendingGigsPage = () => {
  return (
    <>
      <Metadata title="Attending Gigs" description="Attending Gigs page" />

      <section className="mx-5 flex w-[90%] flex-col items-center space-y-3">
        <h1 className="text-3xl font-semibold">Attending Gigs</h1>
        <AttendingGigsCell />
      </section>
    </>
  )
}

export default AttendingGigsPage
