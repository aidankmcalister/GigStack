import { render } from '@redwoodjs/testing/web'

import NewListingButton from './NewListingButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewListingButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewListingButton />)
    }).not.toThrow()
  })
})
