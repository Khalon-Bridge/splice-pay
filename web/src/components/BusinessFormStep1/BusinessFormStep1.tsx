import { HStack, VStack, Avatar } from '@chakra-ui/react'
import { Submit as _Submit } from '@redwoodjs/forms'
import FormControl from '../FormControl/FormControl'
import PageSection from '../PageSection/PageSection'
import StepsActionButtons from '../StepsActionButtons/StepsActionButtons'
import TextField from 'src/components/TextInputField'
import SelectField from 'src/components/SelectInputField'

import {
  BASIC_DETAILS_TEXT,
  BASIC_DETAILS_TITLE,
  CONTACT_DETAILS_TEXT,
  CONTACT_DETAILS_TITLE,
} from './presets'

const BusinessFormStep1 = () => {
  return (
    <HStack w="full" spacing={20} align="start" justify={'space-evenly'}>
      <VStack w="full" spacing={10}>
        {/* Basic details section */}
        <PageSection
          description={BASIC_DETAILS_TEXT}
          name={BASIC_DETAILS_TITLE}
        >
          <FormControl label="Business name" name="name">
            {(props) => (
              <TextField
                validation={{ required: true }}
                placeholder="e.g My awesome business"
                {...props}
              />
            )}
          </FormControl>
          <FormControl label="Business type" name="type">
            {(props) => (
              <SelectField
                validation={{ required: true }}
                placeholder="What do you sell?"
                {...props}
              >
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
          <FormControl label="Email address" name="information.email">
            {(props) => (
              <TextField
                validation={{ required: true }}
                placeholder="e.g info@mystore.com"
                {...props}
              />
            )}
          </FormControl>
          <FormControl label="Business location" name="information.address">
            {(props) => (
              <TextField  placeholder="your business address" {...props} />
            )}
          </FormControl>
          <FormControl label="Phone number" name="information.phone">
            {(props) => (
              <TextField placeholder="your business phone number" {...props} />
            )}
          </FormControl>
        </PageSection>
        <StepsActionButtons />
      </VStack>
      <VStack w="lg">
        <Avatar
          name="my store"
          borderRadius="lg"
          w="full"
          bgColor="orange.100"
        />
      </VStack>
    </HStack>
  )
}

export default BusinessFormStep1
