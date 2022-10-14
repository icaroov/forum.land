import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'

export type BasicPageProps = {
  children: ReactNode
  meta?: {
    title: string
  }
}

const BasicPage = ({ children, meta }: BasicPageProps) => {
  return (
    <>
      {meta && (
        <Head>
          <title>{`${meta.title} | Reddit`}</title>
        </Head>
      )}

      <Box>{children}</Box>
    </>
  )
}

export default BasicPage
