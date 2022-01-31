import { extendTheme } from '@chakra-ui/react'

import styles from './styles'
import colors from './foundation/colors'
import fonts from './foundation/fonts'
import Button from './components/button'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps'
const overrides = {
  styles,
  colors,
  components: {
    Button,
    Submit: Button,
    Steps,
  },
  fonts,
}

export default extendTheme(overrides)
