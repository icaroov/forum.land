import { render, screen } from '@testing-library/react'

import ResetPassword from '.'

describe('<ResetPassword />', () => {
  it('should render the heading', () => {
    render(<ResetPassword />)

    expect(
      screen.getByRole('heading', { name: /ResetPassword/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})