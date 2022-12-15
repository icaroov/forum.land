import { ThemeConfig, extendTheme } from '@chakra-ui/react'
import { Styles } from '@chakra-ui/theme-tools'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'

import { ButtonStyles } from '@src/styles/common/button'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const fonts = {
  main: 'Open Sans, sans-serif'
}

const styles: Styles = {
  global: ({ colorMode }) => ({
    'html, body': {
      bg: colorMode === 'dark' ? '#282a36' : '#f8f9fa',
      color: colorMode === 'dark' ? '#ffffff' : '#282a36',
      fontSize: 'md',
      lineHeight: 'tall'
    }
  })
}

const theme = extendTheme({
  config,
  fonts,
  styles,
  colors: {
    custom: {
      green: '#50fa7b',
      text: {
        primary: '#ffffff'
      },
      background: {
        light: '#f8f9fa',
        dark: '#282a36'
      },
      backgroundDark: '#383a59',
      comment: '#6272a4',
      line: '#44475a',
      red: '#ff5555',
      yellow: '#f1fa8c',
      orange: '#ffb86c',
      cyan: '#8be9fd',
      foreground: '#f8f8f2',
      pink: '#ff79c6',
      purple: '#bd93f9'
    }
  },
  components: {
    ButtonStyles
  }
})

export default theme
