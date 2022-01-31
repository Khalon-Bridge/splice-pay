import { render } from '@redwoodjs/testing/web'

import BusinessFormStep1 from './BusinessFormStep1'

describe('BusinessFormStep1', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BusinessFormStep1 />)
    }).not.toThrow()
  })
})
