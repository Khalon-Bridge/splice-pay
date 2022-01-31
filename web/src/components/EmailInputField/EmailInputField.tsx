import { chakra } from '@chakra-ui/react'
import { EmailField as _EmailField } from '@redwoodjs/forms'
const EmailField = chakra(_EmailField)

//interface EmailInputFieldProps extends InputFieldProps {
//}

const EmailInputField = (props) => {
  return (
    <EmailField
      py={2}
      px={5}
      borderRadius={'lg'}
      bgColor={'background'}
      w="full"
      {...props}
    />
  )
}

export default EmailInputField
