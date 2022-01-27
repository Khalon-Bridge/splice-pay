import { render } from '@redwoodjs/testing/web'

import BaseLayout from './BaseLayout'

describe('BaseLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BaseLayout title="title" />)
    }).not.toThrow()
  })
})
