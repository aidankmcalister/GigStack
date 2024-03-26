import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AttendingGigsPage = () => {
  return (
    <>
      <Metadata title="AttendingGigs" description="AttendingGigs page" />

      <h1>AttendingGigsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AttendingGigsPage/AttendingGigsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>attendingGigs</code>, link to me with `
        <Link to={routes.attendingGigs()}>AttendingGigs</Link>`
      </p>
    </>
  )
}

export default AttendingGigsPage
