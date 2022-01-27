import { render } from '@redwoodjs/testing/web'

import DashboardPage from './DashboardPage'

describe('DashboardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardPage />)
    }).not.toThrow()
  })
})
