import { Box } from '@chakra-ui/react'
import SideBarNav from 'src/components/SideBarNav/SideBarNav'
import BaseLayout from '../BaseLayout'

const SideBarLayout: React.FC = ({ children }) => {
  return (
    <BaseLayout>
      <SideBarNav />
      <Box ml={[0, 0, '218px']}>{children}</Box>
    </BaseLayout>
  )
}

export default SideBarLayout
