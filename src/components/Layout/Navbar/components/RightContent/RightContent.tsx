import { Flex } from '@chakra-ui/react'

import AuthModal from '@src/components/AuthModal'

import AuthButtons from '../AuthButtons'

// export type RightContentProps = {}

const RightContent = () => {
  return (
    <>
      <AuthModal />

      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  )
}

export default RightContent
