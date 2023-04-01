import { SearchIcon } from '@chakra-ui/icons'
import { Flex, InputGroup, InputLeftElement } from '@chakra-ui/react'

import { UserType } from '@src/shared/types/user.type'

import Input from '@components/common/Input'

type SearchInputProps = {
  user?: UserType | undefined
  maxWidth?: string
}

const SearchInput = ({ user, maxWidth = 'auto' }: SearchInputProps) => {
  return (
    <Flex
      flexGrow={1}
      maxWidth={user ? maxWidth : '600px'}
      mr={2}
      align="center"
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.100" mb={1} />
        </InputLeftElement>

        <Input
          type="search"
          placeholder="Pesquisar..."
          fontSize="sm"
          height="34px"
          background="gray.800"
          paddingLeft={10}
        />
      </InputGroup>
    </Flex>
  )
}

export default SearchInput
