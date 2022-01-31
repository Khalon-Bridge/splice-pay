import { Box } from '@chakra-ui/react'
import {
  UseControllerProps,
  useController,
  UseControllerReturn,
} from '@redwoodjs/forms'
import { Fragment } from 'react'

interface CustomControlProps extends UseControllerProps {
  children?: (payload: UseControllerReturn) => React.ReactNode
}

const CustomControl = ({ children, ...rest }: CustomControlProps) => {
  const controlProps = useController({ ...rest })
  return <Fragment>{children(controlProps)}</Fragment>
}

export default CustomControl
