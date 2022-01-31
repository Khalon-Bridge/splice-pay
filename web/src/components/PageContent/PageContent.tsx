import { Box } from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'

type PageContentProps = {
  metaTitle: string
  metaDesc?: string
}

const PageContent: React.FC<PageContentProps> = ({
  metaTitle,
  metaDesc,
  children,
}) => {
  return (
    <Box px={7} py={5}>
      <MetaTags title={metaTitle} description={metaDesc} />
      {children}
    </Box>
  )
}

export default PageContent
