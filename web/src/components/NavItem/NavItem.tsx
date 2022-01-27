/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Center, Icon, StyleProps } from '@chakra-ui/react'
import { Link, useMatch } from '@redwoodjs/router'
interface NavItemProps extends StyleProps {
  icon?: any
  isActive?: boolean
  to?: string
  children?: React.ReactNode
}

const NavItem = ({ icon, isActive, children, to, ...props }: NavItemProps) => {
  const { match } = useMatch(to || '#')
  const _isActive = isActive || match
  return (
    <Box
      as={Link}
      to={to || '#'}
      display="flex"
      alignItems="center"
      color={_isActive ? 'primary' : '#030229'}
      bg="white"
      gap={3}
      role="group"
      fontWeight="semibold"
      fontSize={16}
      transition=".15s ease"
      {...props}
    >
      <Box
        pl={7}
        py={3}
        h={'full'}
        bgGradient={_isActive ? 'linear(to-r,orange.100,white)' : 'none'}
        _groupHover={{ bgGradient: 'linear(to-r,orange.100,white)' }}
      >
        {icon && (
          <Icon
            boxSize={5}
            w={5}
            h={5}
            opacity={_isActive ? 1 : 0.4}
            _groupHover={{
              color: 'primary',
              opacity: 1,
            }}
            as={icon}
          />
        )}
      </Box>
      <Box
        h="full"
        _groupHover={{ opacity: 1, color: 'primary' }}
        opacity={_isActive ? 1 : 0.5}
      >
        <Center>{children}</Center>
      </Box>
    </Box>
  )
}

export default NavItem
