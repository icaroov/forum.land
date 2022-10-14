import { SearchIcon } from '@chakra-ui/icons'
import { Flex, InputGroup, InputLeftElement } from '@chakra-ui/react'

import Input from '@src/components/common/Input'

const SearchInput = () => {
  return (
    <Flex flexGrow={1} mr={2} align="center">
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
