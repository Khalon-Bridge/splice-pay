import { render } from '@redwoodjs/testing/web'

import CreateBusinessButton from './CreateBusinessButton'

describe('CreateBusinessButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateBusinessButton />)
    }).not.toThrow()
  })
})
