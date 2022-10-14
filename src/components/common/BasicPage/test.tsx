import { render, screen } from '@testing-library/react'

import BasicPage from '.'

describe('<BasicPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<BasicPage />)

    expect(
      screen.getByRole('heading', { name: /BasicPage/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
