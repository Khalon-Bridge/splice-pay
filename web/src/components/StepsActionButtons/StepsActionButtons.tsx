import { HStack, Button } from '@chakra-ui/react'
import { Submit as _Submit } from '@redwoodjs/forms'
import { UseStepsProps } from '../BusinessFormProvider/BusinessFormProvider'

const StepsActionButtons = ({ prevStep, activeStep }: UseStepsProps) => {
  return (
    <HStack w="full" justify="space-between">
      {activeStep > 0 && (
        <Button variant="accent" w="full" onClick={prevStep}>
          Back
        </Button>
      )}
      <Button type="submit" px={4} w="full">
        Next
      </Button>
    </HStack>
  )
}

export default StepsActionButtons
