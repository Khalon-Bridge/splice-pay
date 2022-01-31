import { render } from '@redwoodjs/testing/web'

import SelectInputField from './SelectInputField'

describe('SelectInputField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SelectInputField />)
    }).not.toThrow()
  })
})
