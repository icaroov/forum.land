import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '60px',
    fontSize: '10pt',
    fontWeight: 700,
    _focus: {
      boxShadow: 'none'
    }
  },
  sizes: {
    sm: {
      fontSize: '8pt'
    },
    md: {
      fontSize: '10pt'
    }
  },
  variants: {
    solid: {
      color: 'white',
      bg: 'pink.500',
      _hover: {
        bg: 'pink.400'
      }
    },
    outline: {
      color: 'pink.400',
      border: '1px solid',
      borderColor: 'pink.500'
    },
    oauth: {
      height: '34px',
      border: '1px solid',
      borderColor: 'gray.300',
      _hover: {
        bg: 'gray.50'
      }
    }
  }
}
