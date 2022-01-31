import { render } from '@redwoodjs/testing/web'

import PageSection from './PageSection'

describe('PageSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageSection />)
    }).not.toThrow()
  })
})
