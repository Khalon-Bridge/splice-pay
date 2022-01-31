import { Box, StyleProps } from '@chakra-ui/react'
import React from 'react'

export interface BaseLayoutProps extends StyleProps {
  children?: React.ReactNode
}

const BaseLayout = ({ children, ...props }: BaseLayoutProps) => {
  return (
    <Box minH="100vh" {...props}>
      {children}
    </Box>
  )
}

export default BaseLayout
