import { render } from '@redwoodjs/testing/web'

import UserInfoForm from './UserInfoForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserInfoForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserInfoForm />)
    }).not.toThrow()
  })
})
