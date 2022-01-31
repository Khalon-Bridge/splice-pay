import { IconProps } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { Logo as _Logo } from 'src/utils/svgs/logo'

const Logo: React.FC<IconProps> = (props) => {
  return (
    <Link to={routes.home()}>
      <_Logo {...props} />
    </Link>
  )
}

export default Logo
