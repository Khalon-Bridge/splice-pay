import { render } from '@redwoodjs/testing/web'

import Container from './Container'

describe('Container', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Container />)
    }).not.toThrow()
  })
})
