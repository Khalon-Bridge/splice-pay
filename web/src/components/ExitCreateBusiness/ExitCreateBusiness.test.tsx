import { render } from '@redwoodjs/testing/web'

import ExitCreateBusiness from './ExitCreateBusiness'

describe('ExitCreateBusiness', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExitCreateBusiness />)
    }).not.toThrow()
  })
})
