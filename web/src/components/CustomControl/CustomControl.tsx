import { Box } from '@chakra-ui/react'
import {
  UseControllerProps,
  useController,
  UseControllerReturn,
} from '@redwoodjs/forms'

interface CustomControlProps extends UseControllerProps {
  children?: (payload: UseControllerReturn) => React.ReactNode
}

const CustomControl = ({ children, ...rest }: CustomControlProps) => {
  const controlProps = useController({ ...rest })
  return <Box>{children(controlProps)}</Box>
}

export default CustomControl
