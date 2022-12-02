import { Select } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

const LanguagesSelect = () => {
  const { t } = useTranslation('common')

  return (
    <Select placeholder={t('language.title') || ''} height={27} role="combobox">
      <option value="pt">{t('language.pt')}</option>
      <option value="en">{t('language.en')}</option>
    </Select>
  )
}

export default LanguagesSelect
