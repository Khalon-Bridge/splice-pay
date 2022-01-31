import { render } from '@redwoodjs/testing/web'

import CustomControl from './CustomControl'

describe('CustomControl', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CustomControl name="test" />)
    }).not.toThrow()
  })
})
