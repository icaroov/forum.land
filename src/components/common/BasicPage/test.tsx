import { render, screen } from '@testing-library/react'

import BasicPage from '.'

describe('<BasicPage />', () => {
  it('should render the heading', () => {
    render(
      <BasicPage>
        <h1>Heading</h1>
      </BasicPage>
    )

    expect(
      screen.getByRole('heading', { name: /BasicPage/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
