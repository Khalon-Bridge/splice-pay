import { render } from '@redwoodjs/testing/web'

import BusinessFormStep2 from './BusinessFormStep2'

describe('BusinessFormStep2', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BusinessFormStep2 />)
    }).not.toThrow()
  })
})
