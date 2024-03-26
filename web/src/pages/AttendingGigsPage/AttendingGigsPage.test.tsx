import { render } from '@redwoodjs/testing/web'

import AttendingGigsPage from './AttendingGigsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AttendingGigsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AttendingGigsPage />)
    }).not.toThrow()
  })
})
