import FormControl from './FormControl'
import { Form, TextField } from '@redwoodjs/forms'
import { chakra } from '@chakra-ui/react'
const _TextField = chakra(TextField)
export const generated = () => {
  return (
    <Form>
      <FormControl bg={'gray.200'} name="TestControl">
        {(props) => <_TextField {...props} />}
      </FormControl>
    </Form>
  )
}

export default { title: 'Components/FormControl' }
