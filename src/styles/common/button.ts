import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const ButtonStyles: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: '60px',
    fontSize: '10pt',
    fontWeight: 700,
    _focus: {
      boxShadow: 'none'
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
      background: 'whiteAlpha.200'
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
      height: '30px',
      background: 'pink.500',
      _hover: {
        background: 'pink.400'
      },
      _disabled: {
        color: 'pink.400',
        opacity: 0.4,
        cursor: 'not-allowed',
        background: 'whiteAlpha.200'
      }
    },
    outline: {
      background: 'transparent',
      color: 'pink.500',
      height: '30px',
      border: '1px solid',
      borderColor: 'pink.500'
    },
    oauth: {
      height: '30px',
      border: '1px solid',
      borderColor: 'gray.300',
      _hover: {
        bg: 'gray.600'
      }
    }
  }
}
