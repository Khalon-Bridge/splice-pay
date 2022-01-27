import { render } from '@redwoodjs/testing/web'

import ProductListPage from './ProductListPage'

describe('ProductListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductListPage />)
    }).not.toThrow()
  })
})
