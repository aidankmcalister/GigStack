import { Metadata } from '@redwoodjs/web'

import AttendingGigsCell from 'src/components/AttendingGigsCell'

const AttendingGigsPage = () => {
  return (
    <>
      <Metadata title="AttendingGigs" description="AttendingGigs page" />

      <h1>AttendingGigsPage</h1>
      <AttendingGigsCell />
    </>
  )
}

export default AttendingGigsPage
