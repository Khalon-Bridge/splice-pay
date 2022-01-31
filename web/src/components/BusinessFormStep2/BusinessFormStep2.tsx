import { chakra, GridItem, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import FormControl from 'src/components/FormControl/FormControl'
import {
  TextField as _TextField,
  SelectField as _SelectField,
  EmailField as _EmailField,
  TelField as _TelField,
  Submit as _Submit,
} from '@redwoodjs/forms'

import { range } from 'lodash'
import {
  STORE_SETTINGS_TEXT,
  STORE_SETTINGS_TITLE,
  INVESTMENT_SETTINGS_TEXT,
  INVESTMENT_SETTINGS_TITLE,
  strategyOptions,
} from './presets'
import PageSection from '../PageSection/PageSection'
import CustomControl from '../CustomControl/CustomControl'
import RadioGroup from '../RadioGroup/RadioGroup'
import RadioCard from '../RadioCard/RadioCard'
import StepsActionButtons from '../StepsActionButtons/StepsActionButtons'

const TextField = chakra(_TextField)
const SelectField = chakra(_SelectField)

const BusinessFormStep2 = (props) => {
  return (
    <VStack align={'start'} spacing={10}>
      <PageSection
        description={STORE_SETTINGS_TEXT}
        name={STORE_SETTINGS_TITLE}
      >
        <HStack>
          <FormControl label="Invoice currency" name="invoiceCurrency">
            {(props) => (
              <SelectField {...props}>
                <option>USDT</option>
                <option>AVAX</option>
              </SelectField>
            )}
          </FormControl>
          <FormControl
            label="Invoice wallet address"
            name="invoiceWalletAddress"
          >
            {(props) => (
              <TextField
                placeholder="Blockchain wallet address for recieving invoice payments"
                {...props}
              />
            )}
          </FormControl>
        </HStack>
      </PageSection>
      {/* Investment settings section */}
      <PageSection
        name={INVESTMENT_SETTINGS_TEXT}
        description={INVESTMENT_SETTINGS_TITLE}
      >
        <SimpleGrid columns={2}>
          <FormControl
            label="Investment returns wallet address"
            name="investmenteWalletAddress"
          >
            {(props) => (
              <TextField
                placeholder="Blockchain wallet address for recieving returns on investment"
                {...props}
              />
            )}
          </FormControl>
          <FormControl
            label="what (%) of your business earnings are you willing to invest?"
            name="investmentPercent"
          >
            {(props) => (
              <SelectField {...props}>
                {range(0, 100).map((item, key) => (
                  <option key={key}>{item}%</option>
                ))}
              </SelectField>
            )}
          </FormControl>
          <FormControl label="Investment returns currency" name="roiCurrency">
            {(props) => (
              <SelectField placeholder="AVAX,USDT" {...props}>
                <option>USDT</option>
                <option>AVAX</option>
              </SelectField>
            )}
          </FormControl>
        </SimpleGrid>
        <FormControl label="Investment strategy" name="strategy">
          {(props) => (
            <CustomControl {...props}>
              {({ field }) => (
                <RadioGroup
                  as={SimpleGrid}
                  wrapperProps={{ columns: 3, gap: 4 }}
                  options={strategyOptions}
                  defaultValue="automatic"
                  {...field}
                >
                  {(options) => (
                    <GridItem>
                      <RadioCard {...options} />
                    </GridItem>
                  )}
                </RadioGroup>
              )}
            </CustomControl>
          )}
        </FormControl>
      </PageSection>
      <StepsActionButtons {...props} />
    </VStack>
  )
}

export default BusinessFormStep2
