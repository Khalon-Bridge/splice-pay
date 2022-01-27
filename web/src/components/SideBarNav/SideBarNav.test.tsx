import { render } from '@redwoodjs/testing/web'

import SideBarNav from './SideBarNav'

describe('SideBarNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SideBarNav />)
    }).not.toThrow()
  })
})
