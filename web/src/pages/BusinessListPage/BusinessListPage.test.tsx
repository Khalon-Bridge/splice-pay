import { render } from '@redwoodjs/testing/web'

import BusinessListPage from './BusinessListPage'

describe('BusinessListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BusinessListPage />)
    }).not.toThrow()
  })
})
