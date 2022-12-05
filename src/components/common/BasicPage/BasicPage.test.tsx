import { screen } from '@testing-library/react'

import { renderWithProviders } from '@src/config/test/renderWithProviders'

import BasicPage from '.'

describe('<BasicPage />', () => {
  it('should render the component correctly', () => {
    const { container } = renderWithProviders(
      <BasicPage
        meta={{
          title: 'Test'
        }}
      >
        <h1>Test</h1>
      </BasicPage>
    )

    expect(container).toMatchSnapshot()
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
