import { render } from '@redwoodjs/testing/web'

import FormControl from './FormControl'

describe('FormControl', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormControl />)
    }).not.toThrow()
  })
})
