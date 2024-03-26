import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PostedGigsPage = () => {
  return (
    <>
      <Metadata title="PostedGigs" description="PostedGigs page" />

      <h1>PostedGigsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/PostedGigsPage/PostedGigsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>postedGigs</code>, link to me with `
        <Link to={routes.postedGigs()}>PostedGigs</Link>`
      </p>
    </>
  )
}

export default PostedGigsPage
