import { render } from '@redwoodjs/testing/web'

import SingleViewLayout from './SingleViewLayout'

describe('SingleViewLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SingleViewLayout />)
    }).not.toThrow()
  })
})
