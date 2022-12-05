import { screen } from '@testing-library/react'

import { renderWithProviders } from '@src/config/test/renderWithProviders'

import MainContainer from '.'

describe('<MainContainer />', () => {
  it('should render the component correctly', () => {
    const { container } = renderWithProviders(
      <MainContainer cookies="fake-cookies">
        <h1>Test</h1>
      </MainContainer>
    )

    expect(container).toMatchSnapshot()
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
