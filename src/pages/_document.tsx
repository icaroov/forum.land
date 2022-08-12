import { ColorModeScript } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'

import theme from '@src/styles/theme'

const Document = () => {
  return (
    <Html lang="pt-BR">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
        rel="stylesheet"
      />
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
