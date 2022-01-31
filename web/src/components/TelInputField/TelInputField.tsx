import { chakra } from '@chakra-ui/react'
import { TelField as _TelField } from '@redwoodjs/forms'
const TelField = chakra(_TelField)

//interface TelInputFieldProps extends InputFieldProps {
//}

const TelInputField = (props) => {
  return (
    <TelField
      py={2}
      px={5}
      borderRadius={'lg'}
      bgColor={'background'}
      w="full"
      {...props}
    />
  )
}

export default TelInputField
