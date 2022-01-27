import * as React from 'react'
import theme from '../src/themes/default/index'

import { ChakraProvider } from '@chakra-ui/react'

export const parameters = {
  chakra: {
    theme,
  },
}

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={theme}>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
