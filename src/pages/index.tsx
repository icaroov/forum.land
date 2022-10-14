import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Main from '@src/components/Main'
import BasicPage from '@src/components/common/BasicPage'

const Home = () => {
  return (
    <BasicPage meta={{ title: 'Home' }}>
      <Main />
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

  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'common', 'auth']))
    }
  }
}
