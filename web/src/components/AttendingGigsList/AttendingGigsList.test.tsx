import { render } from '@redwoodjs/testing/web'

import AttendingGigsList from './AttendingGigsList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AttendingGigsList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AttendingGigsList />)
    }).not.toThrow()
  })
})
