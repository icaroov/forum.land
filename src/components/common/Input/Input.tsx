import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  HTMLChakraProps
} from '@chakra-ui/react'
import { LegacyRef } from 'react'

export type InputProps = ChakraInputProps &
  HTMLChakraProps<'input'> & {
    innerRef?: LegacyRef<HTMLInputElement>
  }

const Input = ({ innerRef, ...props }: InputProps) => {
  return (
    <ChakraInput
      fontSize="10pt"
      _placeholder={{ color: 'gray.500' }}
      ref={innerRef}
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
