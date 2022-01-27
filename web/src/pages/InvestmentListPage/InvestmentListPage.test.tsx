import { render } from '@redwoodjs/testing/web'

import InvestmentListPage from './InvestmentListPage'

describe('InvestmentListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvestmentListPage />)
    }).not.toThrow()
  })
})
