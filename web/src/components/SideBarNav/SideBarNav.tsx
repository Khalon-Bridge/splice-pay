import { Box, StyleProps } from '@chakra-ui/react'
import { Logo } from 'src/utils/svgs/logo'
import NavItems from '../NavItems/NavItems'
const SideBarNav = (props: StyleProps) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    bg="white"
    overflowX="hidden"
    overflowY="auto"
    borderRightWidth="1px"
    maxW="218px"
    w="full"
    py={10}
    {...props}
  >
    <Logo color="primary" mb={5} ml={7} w="154px" h="32px" />
    <NavItems />
  </Box>
)

export default SideBarNav
