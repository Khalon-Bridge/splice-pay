import { Box, Text } from '@chakra-ui/react'
import { MdDashboard, MdChecklist, MdSettings } from 'react-icons/md'
import { FaFileInvoiceDollar } from 'react-icons/fa'
import { BiBriefcaseAlt } from 'react-icons/bi'
import NavItem from '../NavItem/NavItem'
import { routes } from '@redwoodjs/router'

const NavItems = () => {
  return (
    <Box>
      <NavItem to={routes.home()} icon={MdDashboard}>
        <Text>Dashboard</Text>
      </NavItem>
      <NavItem to={routes.invoiceList()} icon={FaFileInvoiceDollar}>
        <Text>Invoices</Text>
      </NavItem>
      <NavItem to={routes.productList()} icon={MdChecklist}>
        <Text>Products</Text>
      </NavItem>
      <NavItem to={routes.investmentList()} icon={BiBriefcaseAlt}>
        <Text>Investments</Text>
      </NavItem>
      <NavItem icon={MdSettings}>
        <Text>Settings</Text>
      </NavItem>
    </Box>
  )
}

export default NavItems
