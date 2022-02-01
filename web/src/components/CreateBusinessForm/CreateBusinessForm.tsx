/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Container, HStack } from '@chakra-ui/react'
import { Step, Steps, useSteps } from 'chakra-ui-steps'
import BusinessFormStep1 from '../BusinessFormStep1/BusinessFormStep1'
import BusinessFormStep2 from '../BusinessFormStep2/BusinessFormStep2'
import ExitCreateBusiness from 'src/components/ExitCreateBusiness/ExitCreateBusiness'
import { useAuth } from '@redwoodjs/auth'
type TStepProps = {
  name: string
  content: (payload?: any) => React.ReactNode
}

import { STEP1_NAME, STEP2_NAME } from './presets'
import { routes } from '@redwoodjs/router'
import { Form } from '@redwoodjs/forms'
import MutationProvider from '../MutationProvider/MutationProvider'
import { CREATE_BUSINESS } from '../BusinessFormProvider/mutation'
import { useState } from 'react'
import { CreateBusiness } from 'types/graphql'
import { useStore } from 'src/utils/stores/business-store'

const SUCCESS_MESSAGE = 'Hurray! you have successfully setup a business'

const steps: TStepProps[] = [
  { name: STEP1_NAME, content: BusinessFormStep1 },
  { name: STEP2_NAME, content: BusinessFormStep2 },
]

const CreateBusinessForm = () => {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [stepsData, setStepsData] = useState({})
  const { setStoreId, currentStoreId } = useStore((s) => s)

  const { currentUser } = useAuth()

  const props = useSteps({
    initialStep: 0,
  })

  const onError = (err: { message: string }) => {
    setError(err.message)
  }

  const onCompleted = (data: CreateBusiness) => {
    setSuccess(SUCCESS_MESSAGE)
    setStoreId(data.createBusiness.id)
  }

  const onSubmit = (mutate) => (data) => {
    setStepsData({ ...stepsData, ...data })
    props.nextStep()
    if (props.activeStep === steps.length - 1) {
      //console.log(currentUser.ethAddress)
      mutate({
        variables: {
          input: { ...stepsData, ...data, wallet: currentUser.ethAddress },
        },
      })
    }
  }

  return (
    <Container
      borderRadius={'lg'}
      maxW={'container.lg'}
      py={10}
      px={20}
      bgColor={'white'}
      w="container.xl"
    >
      <Steps colorScheme={'yellow'} w="lg" mb={5} activeStep={props.activeStep}>
        {steps &&
          steps.map(({ name, content }) => (
            <Step key={name} label={name}>
              <MutationProvider
                options={{ onError, onCompleted }}
                mutation={CREATE_BUSINESS}
              >
                {([mutate]) => (
                  <Form onSubmit={onSubmit(mutate)}>{content(props)}</Form>
                )}
              </MutationProvider>
            </Step>
          ))}
      </Steps>
      {steps.length === props.activeStep && (
        <ExitCreateBusiness
          success={success}
          error={error}
          loading={!error && !success}
          action={error ? 'Leave this page' : null}
          onClick={() => {
            routes.businessList({ storeId: currentStoreId })
          }}
        >
          {success && (
            <HStack mt={3} spacing={5} w={'sm'} justify={'space-between'}>
              <Button onClick={props.reset} w="full">
                Add another business
              </Button>
              <Button
                onClick={() => {
                  routes.dashboard()
                }}
                w="full"
                variant="accent"
              >
                Go to dashboard
              </Button>
            </HStack>
          )}
        </ExitCreateBusiness>
      )}
    </Container>
  )
}

export default CreateBusinessForm
