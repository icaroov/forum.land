import { render, screen } from '@testing-library/react'

import UserMenu from '.'

describe('<UserMenu />', () => {
  it('should render the heading', () => {
    render(<UserMenu />)

    expect(
      screen.getByRole('heading', { name: /UserMenu/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
