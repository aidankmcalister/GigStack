import { Metadata } from '@redwoodjs/web'

import PostedGigsCell from 'src/components/PostedGigsCell'

const PostedGigsPage = () => {
  return (
    <>
      <Metadata title="PostedGigs" description="PostedGigs page" />

      <h1>PostedGigsPage</h1>
      <PostedGigsCell userId={''} />
    </>
  )
}

export default PostedGigsPage
