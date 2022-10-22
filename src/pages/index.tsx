import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import BasicPage from '@components/common/BasicPage'

const Home = () => {
  return (
    <BasicPage meta={{ title: 'Home' }}>
      <h1>Main Content</h1>
    </BasicPage>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({
  locale = 'pt',
  res
}) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=30, stale-while-revalidate=2630000'
  )

  const translations = await serverSideTranslations(locale, [
    'home',
    'common',
    'auth'
  ])

  return {
    props: {
      ...translations
    }
  }
}
