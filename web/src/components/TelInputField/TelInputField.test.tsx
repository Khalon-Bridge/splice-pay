import { render } from '@redwoodjs/testing/web'

import TelInputField from './TelInputField'

describe('TelInputField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TelInputField />)
    }).not.toThrow()
  })
})
