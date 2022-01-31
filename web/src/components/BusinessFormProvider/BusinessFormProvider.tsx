import { Form } from '@redwoodjs/forms'

export type UseStepsProps = {
  activeStep?: number
  stepCount?: number
  nextStep?: () => void
  prevStep?: () => void
  reset?: () => void
  setStep?: (step: number) => void
}

interface BusinessFormProviderProps extends UseStepsProps {
  children?: (payload?: UseStepsProps) => React.ReactNode
}

const BusinessFormProvider = (props: BusinessFormProviderProps) => {
  const { children, nextStep, activeStep, stepCount } = props
  const onSubmit = (data) => {
    if (activeStep == stepCount) {
      console.log(data)
    } else {
      nextStep && nextStep()
    }
  }
  return <Form onSubmit={onSubmit}>{children(props)}</Form>
}

export default BusinessFormProvider
