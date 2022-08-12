import { render, screen } from '@testing-library/react'

import AuthInputs from '.'

describe('<AuthInputs />', () => {
  it('should render the heading', () => {
    const { container } = render(<AuthInputs />)

    expect(
      screen.getByRole('heading', { name: /AuthInputs/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
