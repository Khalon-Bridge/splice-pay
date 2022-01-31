import { render } from '@redwoodjs/testing/web'

import EmailInputField from './EmailInputField'

describe('EmailInputField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmailInputField />)
    }).not.toThrow()
  })
})
