import { chakra, HStack, VStack } from '@chakra-ui/react'
import {
  TextField as _TextField,
  SelectField as _SelectField,
  EmailField as _EmailField,
  TelField as _TelField,
  Submit as _Submit,
} from '@redwoodjs/forms'
import FormControl from '../FormControl/FormControl'
import PageSection from '../PageSection/PageSection'
import StepsActionButtons from '../StepsActionButtons/StepsActionButtons'

import {
  BASIC_DETAILS_TEXT,
  BASIC_DETAILS_TITLE,
  CONTACT_DETAILS_TEXT,
  CONTACT_DETAILS_TITLE,
} from './presets'
const TextField = chakra(_TextField)
const SelectField = chakra(_SelectField)
const EmailField = chakra(_EmailField)
const TelField = chakra(_TelField)

const BusinessFormStep1 = () => {
  return (
    <HStack>
      <VStack align={'start'} spacing={10}>
        {/* Basic details section */}
        <PageSection
          description={BASIC_DETAILS_TEXT}
          name={BASIC_DETAILS_TITLE}
        >
          <FormControl label="Business name" name="name">
            {(props) => (
              <TextField placeholder="e.g My awesome business" {...props} />
            )}
          </FormControl>
          <FormControl label="Business type" name="type">
            {(props) => (
              <SelectField placeholder="What do you sell?" {...props}>
                <option>Service</option>
                <option>Product</option>
              </SelectField>
            )}
          </FormControl>
        </PageSection>
        {/* Contact details section */}
        <PageSection
          description={CONTACT_DETAILS_TEXT}
          name={CONTACT_DETAILS_TITLE}
        >
          <FormControl label="Email address" name="email">
            {(props) => (
              <EmailField placeholder="e.g info@mystore.com" {...props} />
            )}
          </FormControl>
          <FormControl label="Business location" name="address">
            {(props) => (
              <TextField placeholder="your business address" {...props} />
            )}
          </FormControl>
          <FormControl label="Phone number" name="phone">
            {(props) => (
              <TelField placeholder="your business phone number" {...props} />
            )}
          </FormControl>
        </PageSection>
        <StepsActionButtons />
      </VStack>
      <VStack></VStack>
    </HStack>
  )
}

export default BusinessFormStep1
