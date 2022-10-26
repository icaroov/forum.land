import { SearchIcon } from '@chakra-ui/icons'
import { Flex, InputGroup, InputLeftElement } from '@chakra-ui/react'

import { UserType } from '@src/shared/user.type'

import Input from '@components/common/Input'

type SearchInputProps = {
  user?: UserType | undefined
}

const SearchInput = ({ user }: SearchInputProps) => {
  return (
    <Flex flexGrow={1} maxWidth={user ? 'auto' : '600px'} mr={2} align="center">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.100" mb={1} />
        </InputLeftElement>

        <Input
          type="search"
          placeholder="Pesquisar..."
          fontSize="10pt"
          height="34px"
          background="gray.800"
          paddingLeft={10}
        />
      </InputGroup>
    </Flex>
  )
}

export default SearchInput
