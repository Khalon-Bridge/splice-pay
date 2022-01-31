import { render } from '@redwoodjs/testing/web'

import PageContent from './PageContent'

describe('PageContent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageContent metaTitle="test" />)
    }).not.toThrow()
  })
})
