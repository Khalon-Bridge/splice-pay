import { render } from '@redwoodjs/testing/web'

import NavItem from './NavItem'

describe('NavItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavItem />)
    }).not.toThrow()
  })
})
