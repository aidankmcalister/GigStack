import { render } from '@redwoodjs/testing/web'

import PostedGigsPage from './PostedGigsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PostedGigsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostedGigsPage />)
    }).not.toThrow()
  })
})
