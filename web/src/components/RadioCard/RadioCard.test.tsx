import { render } from '@redwoodjs/testing/web'

import RadioCard from './RadioCard'

describe('RadioCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RadioCard />)
    }).not.toThrow()
  })
})
