import { Button, ButtonProps } from '@chakra-ui/react'
import { MdLogout } from 'react-icons/md'
import { useAuth } from '@redwoodjs/auth'
const LogOutButton = (props: ButtonProps) => {
  const { logOut } = useAuth()
  return (
    <Button
      onClick={logOut}
      variant="accent"
      rightIcon={<MdLogout />}
      size="sm"
      {...props}
    >
      Disconnect wallet
    </Button>
  )
}

export default LogOutButton
