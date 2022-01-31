import { render } from '@redwoodjs/testing/web'

import BusinessStatusItem from './BusinessStatusItem'

describe('BusinessStatusItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BusinessStatusItem label="test" activeText="test" />)
    }).not.toThrow()
  })
})
