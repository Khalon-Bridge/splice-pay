import NavItem from './NavItem'
import { FaDashcube } from 'react-icons/fa'
import { Box } from '@chakra-ui/react'
export const isActive = () => {
  return (
    <Box maxW="218px">
      <NavItem isActive icon={FaDashcube}>
        Dashboard
      </NavItem>
    </Box>
  )
}
export const generated = () => {
  return (
    <Box maxW="218px">
      <NavItem icon={FaDashcube}>Dashboard</NavItem>
    </Box>
  )
}

export default { title: 'Components/NavItem' }
