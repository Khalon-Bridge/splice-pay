import { render } from '@redwoodjs/testing/web'

import CreateBusinessPage from './CreateBusinessPage'

describe('CreateBusinessPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateBusinessPage />)
    }).not.toThrow()
  })
})
