import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

// export type SearchInputProps = {}

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
          _placeholder={{ color: 'gray.500' }}
          _hover={{
            bg: 'gray.700',
            border: '1px solid',
            borderColor: 'pink.500'
          }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'pink.500'
          }}
          height="34px"
          background="gray.800"
        />
      </InputGroup>
    </Flex>
  )
}

export default SearchInput
