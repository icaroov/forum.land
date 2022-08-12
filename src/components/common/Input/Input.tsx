import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  HTMLChakraProps
} from '@chakra-ui/react'

export type InputProps = ChakraInputProps & HTMLChakraProps<'input'>

const Input = ({ ...props }: InputProps) => {
  return (
    <ChakraInput
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
      {...props}
    />
  )
}

export default Input
