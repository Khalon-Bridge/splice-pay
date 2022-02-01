import EmptyState, {
  EmptyStateProps,
} from 'src/components/EmptyState/EmptyState'
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  VStack,
} from '@chakra-ui/react'

interface ExitCreateBusinessProps extends EmptyStateProps {
  loading?: boolean
}

const ExitCreateBusiness: React.FC<ExitCreateBusinessProps> = ({
  loading,
  children,
  ...props
}) => {
  return loading ? (
    <VStack spacing={3}>
      <VStack spacing={4}>
        <SkeletonCircle boxSize={20} />
        <SkeletonText w={'sm'} />
      </VStack>
      <Skeleton w={20} h={10} borderRadius={'lg'} />
    </VStack>
  ) : (
    <EmptyState {...props}>{children}</EmptyState>
  )
}

export default ExitCreateBusiness
