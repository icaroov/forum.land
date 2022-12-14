import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'

type MetaType = {
  title: string
}

export type BasicPageProps = {
  children: ReactNode
  meta?: Partial<MetaType>
}

const BasicPage = ({ children, meta }: BasicPageProps) => {
  return (
    <>
      {!!meta && (
        <Head>
          <title>{`${meta.title} | Reddit`}</title>
        </Head>
      )}

      <Box>{children}</Box>
    </>
  )
}

export default BasicPage
