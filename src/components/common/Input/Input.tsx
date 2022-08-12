import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  HTMLChakraProps
} from '@chakra-ui/react'

export type InputProps = {
  name: string
  type?: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
} & ChakraInputProps &
  HTMLChakraProps<'input'>

const Input = ({ name, type, placeholder, onChange, ...rest }: InputProps) => {
  return (
    <ChakraInput
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
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
      {...rest}
    />
  )
}

export default Input
