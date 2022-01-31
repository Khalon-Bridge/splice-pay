/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  RadioProps,
  useRadioGroup,
  UseRadioGroupProps,
} from '@chakra-ui/react'

interface props extends RadioProps {
  description?: string
  title?: string
}

interface RadioGroupProps extends UseRadioGroupProps {
  options: { value: string; title?: string; description?: string }[]
  children?: (payload: props) => React.ReactNode
  as?: any
  wrapperProps?: any
}

const RadioGroup = ({
  options,
  as,
  wrapperProps,
  children,
  ...rest
}: RadioGroupProps) => {
  const _options = options?.length && options.map((item) => item.value)
  const { getRootProps, getRadioProps } = useRadioGroup({
    ...rest,
  })
  const group = getRootProps()
  return (
    <Box as={as} {...group} {...wrapperProps}>
      {options.map(({ value, description, title }) => {
        const radioProps = getRadioProps({ value })
        return children && children({ ...radioProps, description, title })
      })}
    </Box>
  )
}

export default RadioGroup
