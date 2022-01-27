import { render } from '@redwoodjs/testing/web'

import NavItems from './NavItems'

describe('NavItems', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavItems />)
    }).not.toThrow()
  })
})
