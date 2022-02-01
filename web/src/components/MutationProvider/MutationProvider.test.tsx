import { render } from '@redwoodjs/testing/web'

import MutationProvider from './MutationProvider'

describe('MutationProvider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MutationProvider />)
    }).not.toThrow()
  })
})
