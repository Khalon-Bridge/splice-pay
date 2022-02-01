import { Form } from '@redwoodjs/forms'
import { useStore } from 'src/utils/stores/create-business'
//import { useMutation } from '@redwoodjs/web'
//import { CREATE_BUSINESS } from './mutation'
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
  const { save } = useStore((store) => ({
    save: store.save,
    input: store.input,
  }))
  //const [mutate, { loading, error }] = useMutation(CREATE_BUSINESS)

  const onSubmit = (data) => {
    save(data)
    nextStep && nextStep()
    console.log(activeStep)
    if (activeStep === stepCount - 1) {
      //mutate({ variables: { input: { ...input, ...data } } })
    }
  }
  return <Form onSubmit={onSubmit}>{children(props)}</Form>
}

export default BusinessFormProvider
