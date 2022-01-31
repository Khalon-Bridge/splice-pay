import { render } from '@redwoodjs/testing/web'

import EmptyState from './EmptyState'

describe('EmptyState', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmptyState />)
    }).not.toThrow()
  })
})
