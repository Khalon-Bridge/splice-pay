import { HStack, Button } from '@chakra-ui/react'
import { Submit as _Submit } from '@redwoodjs/forms'

const StepsActionButtons = ({
  prevStep,
  activeStep,
}: {
  prevStep?: () => void
  activeStep?: number
}) => {
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
