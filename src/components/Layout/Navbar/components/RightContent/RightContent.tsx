import { Flex } from '@chakra-ui/react'

import AuthButtons from '../AuthButtons'

// export type SearchInputProps = {}

const RightContent = () => {
  return (
    <>
      {/* <AuthModal /> */}

      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  )
}

export default RightContent
