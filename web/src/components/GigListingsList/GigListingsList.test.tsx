import { render } from '@redwoodjs/testing/web'

import GigListingsList from './GigListingsList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GigListingsList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GigListingsList />)
    }).not.toThrow()
  })
})
