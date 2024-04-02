import { render } from '@redwoodjs/testing/web'

import InstrumentChip from './InstrumentChip'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InstrumentChip', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InstrumentChip />)
    }).not.toThrow()
  })
})
