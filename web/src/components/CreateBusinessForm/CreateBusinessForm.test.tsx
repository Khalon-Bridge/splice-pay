import { render } from '@redwoodjs/testing/web'

import CreateBusinessForm from './CreateBusinessForm'

describe('CreateBusinessForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateBusinessForm />)
    }).not.toThrow()
  })
})
