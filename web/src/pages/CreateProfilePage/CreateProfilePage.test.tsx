import { render } from '@redwoodjs/testing/web'

import CreateProfilePage from './CreateProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CreateProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateProfilePage />)
    }).not.toThrow()
  })
})
