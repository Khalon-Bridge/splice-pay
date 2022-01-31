import { render } from '@redwoodjs/testing/web'

import TextInputField from './TextInputField'

describe('TextInputField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TextInputField />)
    }).not.toThrow()
  })
})
