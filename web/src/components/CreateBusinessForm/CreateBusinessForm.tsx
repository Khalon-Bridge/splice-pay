/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from '@chakra-ui/react'
import { Step, Steps, useSteps } from 'chakra-ui-steps'
import BusinessFormStep1 from '../BusinessFormStep1/BusinessFormStep1'
import BusinessFormStep2 from '../BusinessFormStep2/BusinessFormStep2'
import Provider from 'src/components/BusinessFormProvider/BusinessFormProvider'
type TStepProps = {
  name: string
  content: (payload?: any) => React.ReactNode
}

import { STEP1_NAME, STEP2_NAME } from './presets'

const steps: TStepProps[] = [
  { name: STEP1_NAME, content: BusinessFormStep1 },
  { name: STEP2_NAME, content: BusinessFormStep2 },
]

const CreateBusinessForm = () => {
  const props = useSteps({
    initialStep: 0,
  })
  return (
    <Container
      borderRadius={'lg'}
      maxW={'container.lg'}
      py={10}
      px={20}
      bgColor={'white'}
      w="container.xl"
    >
      <Steps colorScheme={'yellow'} w="lg" mb={4} activeStep={props.activeStep}>
        {steps &&
          steps.map(({ name, content }) => (
            <Step key={name} label={name}>
              <Provider stepCount={steps.length} {...props}>
                {(props) => content(props)}
              </Provider>
            </Step>
          ))}
      </Steps>
    </Container>
  )
}

export default CreateBusinessForm
