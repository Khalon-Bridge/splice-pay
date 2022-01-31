import { render } from '@redwoodjs/testing/web'

import LogOutButton from './LogOutButton'

describe('LogOutButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LogOutButton />)
    }).not.toThrow()
  })
})
