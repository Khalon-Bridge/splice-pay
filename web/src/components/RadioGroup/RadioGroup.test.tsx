import { render } from '@redwoodjs/testing/web'

import RadioGroup from './RadioGroup'

describe('RadioGroup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RadioGroup options={[]} />)
    }).not.toThrow()
  })
})
