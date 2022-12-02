import { screen } from '@testing-library/react'

import { renderWithProviders } from '@src/config/test/renderWithProviders'

import LanguagesSelect from './LanguagesSelect'

describe('<LanguageSelect />', () => {
  it('should render the component correctly', () => {
    renderWithProviders(<LanguagesSelect />)

    const languageSelect = screen.getByRole('combobox')
    const options = screen.getAllByRole('option')

    expect(languageSelect).toBeInTheDocument()
    expect(options).toHaveLength(3)
  })
})
