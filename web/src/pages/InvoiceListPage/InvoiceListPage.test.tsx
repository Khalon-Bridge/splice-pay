import { render } from '@redwoodjs/testing/web'

import InvoiceListPage from './InvoiceListPage'

describe('InvoiceListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvoiceListPage />)
    }).not.toThrow()
  })
})
