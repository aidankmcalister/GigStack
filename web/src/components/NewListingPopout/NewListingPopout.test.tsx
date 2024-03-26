import { render } from '@redwoodjs/testing/web'

import NewListingPopout from './NewListingPopout'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewListingPopout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewListingPopout />)
    }).not.toThrow()
  })
})
