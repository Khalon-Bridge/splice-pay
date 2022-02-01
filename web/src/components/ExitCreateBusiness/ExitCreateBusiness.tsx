import EmptyState from 'src/components/EmptyState/EmptyState'
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  VStack,
} from '@chakra-ui/react'

const ExitCreateBusiness: React.FC<{
  loading?: boolean
  success?: string
  error?: string
}> = ({ loading, error, success }) => {
  return loading ? (
    <VStack spacing={3}>
      <VStack spacing={8}>
        <SkeletonCircle boxSize={20} />
        <SkeletonText w={'sm'} />
      </VStack>
      <Skeleton w={20} h={10} borderRadius={'lg'} />
    </VStack>
  ) : (
    <EmptyState success={success} error={error} />
  )
}

export default ExitCreateBusiness
