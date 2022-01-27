import { Box } from '@chakra-ui/react'

type ContainerProps = {
  children?: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <Box bg="white" py={20} px={4} borderRadius="lg">
      <h2>{'Container'}</h2>
      {children}
    </Box>
  )
}

export default Container
