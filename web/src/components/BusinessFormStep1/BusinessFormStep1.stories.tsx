import BusinessFormStep1 from './BusinessFormStep1'
import BusinessFormProvider from '../BusinessFormProvider/BusinessFormProvider'
export const generated = () => {
  return (
    <BusinessFormProvider>{() => <BusinessFormStep1 />}</BusinessFormProvider>
  )
}

export default { title: 'Components/BusinessFormStep1' }
