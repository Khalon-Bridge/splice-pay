import { render } from '@redwoodjs/testing/web'

import SideBarLayout from './SideBarLayout'

describe('SideBarLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SideBarLayout />)
    }).not.toThrow()
  })
})
