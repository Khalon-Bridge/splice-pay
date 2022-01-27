import { Box, StyleProps } from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'
import React from 'react'

export interface BaseLayoutProps extends StyleProps {
  children?: React.ReactNode
  title: string
  description?: string
}

const BaseLayout = ({
  children,
  title,
  description,
  ...props
}: BaseLayoutProps) => {
  return (
    <Box minH="100vh" {...props}>
      <MetaTags title={title} description={description} />
      {children}
    </Box>
  )
}

export default BaseLayout
