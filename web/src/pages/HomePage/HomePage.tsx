import { Button, Heading, HStack, VStack } from '@chakra-ui/react'
import BaseLayout from 'src/layouts/BaseLayout'
import { Logo } from 'src/utils/svgs/logo'
import { useAuth } from '@redwoodjs/auth'
import { Redirect, routes } from '@redwoodjs/router'

import { PAGE_TEXT, CTA_TEXT_HELP, CTA_TEXT_WALLET } from './presets'
import { MetaTags } from '@redwoodjs/web'

const PAGE_TITLE = 'Dashboard'
const HomePage = () => {
  const { logIn, isAuthenticated } = useAuth()

  return isAuthenticated ? (
    <Redirect to={routes.businessList()} />
  ) : (
    <BaseLayout
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="primary"
      color="white"
    >
      <MetaTags title={PAGE_TITLE} />
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
          <Button
            onClick={() => logIn()}
            variant="secondary"
            maxW={239}
            size="sm"
            width="full"
          >
            {CTA_TEXT_WALLET}
          </Button>
        </HStack>
      </VStack>
    </BaseLayout>
  )
}

export default HomePage
