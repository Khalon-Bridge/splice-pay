import { VStack, Text, Circle, Icon, Button } from '@chakra-ui/react'
import { Success } from 'src/utils/svgs/success'
import { BiError } from 'react-icons/bi'
export type EmptyStateProps = {
  success?: string
  error?: string
  onClick?: React.ReactEventHandler
  action?: string
}

const EmptyState: React.FC<EmptyStateProps> = ({
  success,
  error,
  onClick,
  action,
  children,
}) => {
  return (
    <VStack spacing={3}>
      <VStack align="center" justify={'center'} spacing={4}>
        {success && !error && <Success boxSize={40} color="primary" />}
        {error && !success && (
          <Circle size={40} bgColor={'red.100'}>
            <Icon boxSize={20} color="red.500" as={BiError} />
          </Circle>
        )}
        {success && !error && (
          <Text textAlign={'center'} fontWeight={'semibold'}>
            {success}
          </Text>
        )}
        {error && !success && (
          <Text textAlign={'center'} fontWeight={'semibold'}>
            {error}
          </Text>
        )}
      </VStack>
      {action && (
        <Button size="sm" variant="accent" onClick={onClick}>
          {action}
        </Button>
      )}
      {children}
    </VStack>
  )
}

export default EmptyState
