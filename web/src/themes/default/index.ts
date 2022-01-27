import { extendTheme } from '@chakra-ui/react'

import styles from './styles'
import colors from './foundation/colors'
import fonts from './foundation/fonts'
import Button from './components/button'
const overrides = {
  styles,
  colors,
  components: {
    Button,
  },
  fonts,
}

export default extendTheme(overrides)
