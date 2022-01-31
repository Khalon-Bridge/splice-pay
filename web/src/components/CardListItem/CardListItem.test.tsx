import { render } from '@redwoodjs/testing/web'

import CardListItem from './CardListItem'

describe('CardListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardListItem />)
    }).not.toThrow()
  })
})
