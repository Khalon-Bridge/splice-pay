import { HStack, chakra, Button } from '@chakra-ui/react'
import { Submit as _Submit } from '@redwoodjs/forms'
import { UseStepsProps } from '../BusinessFormProvider/BusinessFormProvider'
const Submit = chakra(_Submit)

const StepsActionButtons = ({ prevStep, activeStep }: UseStepsProps) => {
  return (
    <HStack justify="space-between">
      {activeStep > 0 && <Button onClick={prevStep}>Back</Button>}
      <Submit colorScheme="brand">Next</Submit>
    </HStack>
  )
}

export default StepsActionButtons
