import BusinessFormProvider from '../BusinessFormProvider/BusinessFormProvider'
import BusinessFormStep2 from './BusinessFormStep2'

export const generated = () => {
  return (
    <BusinessFormProvider>
      {(props) => <BusinessFormStep2 {...props} />}
    </BusinessFormProvider>
  )
}

export default { title: 'Components/BusinessFormStep2' }
