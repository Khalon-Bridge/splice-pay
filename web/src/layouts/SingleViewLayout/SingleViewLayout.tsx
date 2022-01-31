import { HStack } from '@chakra-ui/react'
import BaseLayout from '../BaseLayout'
import Logo from 'src/components/Logo/Logo'
import LogOutButton from 'src/components/LogOutButton/LogOutButton'

const SingleViewLayout: React.FC = ({ children }) => {
  return (
    <BaseLayout>
      <HStack justify={'space-between'} px={7} py={5} bgColor={'white'}>
        <Logo color="primary" w="154px" h="32px" />
        <LogOutButton />
      </HStack>
      {children}
    </BaseLayout>
  )
}

export default SingleViewLayout
