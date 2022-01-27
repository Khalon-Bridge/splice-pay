import SideBarNav from 'src/components/SideBarNav/SideBarNav'
import BaseLayout, { BaseLayoutProps } from '../BaseLayout'

interface SideBarLayoutProps extends BaseLayoutProps {}

const SideBarLayout = ({
  children,
  title,
  description,
}: SideBarLayoutProps) => {
  return (
    <BaseLayout description={description} title={title}>
      <SideBarNav />
      {children}
    </BaseLayout>
  )
}

export default SideBarLayout
