import { Button, Heading, HStack, VStack } from '@chakra-ui/react'
import BaseLayout from 'src/layouts/BaseLayout'
import { Logo } from 'src/utils/svgs/logo'
import { PAGE_TEXT, CTA_TEXT_HELP, CTA_TEXT_WALLET } from './presets'
const HomePage = () => {
  return (
    <BaseLayout
      display="flex"
      alignItems="center"
      justifyContent="center"
      title="Home"
      bg="primary"
      color="white"
    >
      <VStack spacing={3}>
        <Logo width={454} height={95} />
        <Heading size="sm">{PAGE_TEXT}</Heading>
        <HStack display="flex" justifyContent="center">
          <Button
            variant="accent"
            maxW={239}
            size="sm"
            colorScheme="brand"
            width="full"
          >
            {CTA_TEXT_HELP}
          </Button>
          <Button variant="secondary" maxW={239} size="sm" width="full">
            {CTA_TEXT_WALLET}
          </Button>
        </HStack>
      </VStack>
    </BaseLayout>
  )
}

export default HomePage
