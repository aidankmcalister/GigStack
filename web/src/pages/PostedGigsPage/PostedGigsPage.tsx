import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import PostedGigsCell from 'src/components/PostedGigsCell'

const PostedGigsPage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <Metadata title="Posted Gigs" description="Posted Gigs page" />

      {currentUser && currentUser.name === null ? (
        <Link
          to={routes.profile()}
          className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-main-orange/30"
        >
          Complete your profile to view your posted gigs
        </Link>
      ) : (
        <section className="mx-5 flex w-[90%] flex-col items-center space-y-3">
          <h1 className="text-3xl font-semibold">Your Posted Gigs</h1>
          <PostedGigsCell />
        </section>
      )}
    </>
  )
}

export default PostedGigsPage
