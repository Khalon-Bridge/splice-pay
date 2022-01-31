import { VStack, FormHelperText, chakra, StyleProps } from '@chakra-ui/react'
import { Label, FieldError } from '@redwoodjs/forms'

interface FormControlChild extends StyleProps {
  name: string
}

interface FormControlProps extends StyleProps {
  name?: string
  children?: (payload: FormControlChild) => React.ReactNode
  helperText?: string
  description?: string
  label?: string
}

const _Label = chakra(Label)

const FormControl = ({
  name,
  children,
  helperText,
  description,
  label,
  ...props
}: FormControlProps) => {
  //const Children = children && chakra(children)
  return (
    <VStack align="start" spacing={2}>
      <_Label name={name}>{label}</_Label>
      {description && <FormHelperText>{description}</FormHelperText>}
      {children && children({ name, ...props })}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      <FieldError name={name} />
    </VStack>
  )
}

export default FormControl
