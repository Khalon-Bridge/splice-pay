import { chakra } from '@chakra-ui/react'
import { SelectField as _SelectField } from '@redwoodjs/forms'
const SelectField = chakra(_SelectField)

//interface SelectInputFieldProps extends InputFieldProps {
//}

const SelectInputField = (props) => {
  return (
    <SelectField
      w="full"
      py={2}
      px={5}
      borderRadius={'lg'}
      bgColor={'background'}
      {...props}
    />
  )
}

export default SelectInputField
