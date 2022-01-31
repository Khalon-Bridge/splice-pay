import { chakra, GridItem, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import FormControl from 'src/components/FormControl/FormControl'

import TextField from 'src/components/TextInputField'
import SelectField from 'src/components/SelectInputField'

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

const BusinessFormStep2 = (props) => {
  return (
    <VStack w="full" align={'start'} spacing={10}>
      <PageSection
        description={STORE_SETTINGS_TEXT}
        name={STORE_SETTINGS_TITLE}
      >
        <HStack w="full" justify="space-between" spacing={4}>
          <FormControl label="Invoice currency" name="settings.invoiceCurrency">
            {(props) => (
              <SelectField {...props}>
                <option>USDT</option>
                <option>AVAX</option>
              </SelectField>
            )}
          </FormControl>
          <FormControl
            label="Invoice wallet address"
            name="settings.invoiceWalletAddress"
          >
            {(props) => (
              <TextField
                validation={{ required: true }}
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
        <SimpleGrid w="full" gap={4} columns={2}>
          <FormControl
            label="Investment returns wallet address"
            name="settings.investmenteWalletAddress"
            description="Blockchain wallet address for recieving returns on investment"
          >
            {(props) => (
              <TextField
                validation={{ required: true }}
                placeholder="Blockchain wallet address"
                {...props}
              />
            )}
          </FormControl>
          <FormControl
            label="Investment Size"
            description="what (%) of your business earnings are you willing to invest?"
            name="settings.investmentPercent"
          >
            {(props) => (
              <SelectField {...props}>
                {range(0, 100).map((item, key) => (
                  <option key={key}>{item}%</option>
                ))}
              </SelectField>
            )}
          </FormControl>
          <FormControl
            label="Investment returns currency"
            name="settings.roiCurrency"
          >
            {(props) => (
              <SelectField placeholder="AVAX,USDT" {...props}>
                <option>USDT</option>
                <option>AVAX</option>
              </SelectField>
            )}
          </FormControl>
        </SimpleGrid>
        <FormControl
          label="Investment strategy"
          description="Choose how you want to grow your investment funds"
          name="settings.strategy"
        >
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
                    <GridItem key={options.key}>
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
