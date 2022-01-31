import { render } from '@redwoodjs/testing/web'

import BusinessFormProvider from './BusinessFormProvider'

describe('BusinessFormProvider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BusinessFormProvider />)
    }).not.toThrow()
  })
})
