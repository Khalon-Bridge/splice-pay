import { Form } from '@redwoodjs/forms'
import BusinessFormStep2 from './BusinessFormStep2'

export const generated = () => {
  return <Form>{(props) => <BusinessFormStep2 {...props} />}</Form>
}

export default { title: 'Components/BusinessFormStep2' }
