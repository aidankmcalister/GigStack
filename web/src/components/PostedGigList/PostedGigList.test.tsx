import { render } from '@redwoodjs/testing/web'

import PostedGigList from './PostedGigList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PostedGigList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostedGigList />)
    }).not.toThrow()
  })
})
