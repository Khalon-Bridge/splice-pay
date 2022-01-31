import { Heading, VStack, Text, Box } from '@chakra-ui/react'

type PageSectionProps = {
  name?: string
  description?: string
  children?: React.ReactNode
}

const PageSection = ({ name, description, children }: PageSectionProps) => {
  return (
    <VStack alignItems={'start'} spacing={2}>
      <Box color="#455A64">
        {name && <Heading size="sm">{name}</Heading>}
        {description && <Text fontSize="sm">{description}</Text>}
      </Box>
      {children}
    </VStack>
  )
}

export default PageSection
