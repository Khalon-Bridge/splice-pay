import { render } from '@redwoodjs/testing/web'

import Logo from './Logo'

describe('Logo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Logo />)
    }).not.toThrow()
  })
})
