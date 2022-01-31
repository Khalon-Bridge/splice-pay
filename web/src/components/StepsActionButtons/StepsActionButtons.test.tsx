import { render } from '@redwoodjs/testing/web'

import StepsActionButtons from './StepsActionButtons'

describe('StepsActionButtons', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StepsActionButtons />)
    }).not.toThrow()
  })
})
