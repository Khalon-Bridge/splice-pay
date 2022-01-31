// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'
import SideBarLayout from 'src/layouts/SideBarLayout/SideBarLayout'
import SingleViewLayout from 'src/layouts/SingleViewLayout/SingleViewLayout'

const Routes = () => {
  return (
    <Router>
      <Private wrap={SideBarLayout} unauthenticated="home">
        <Route path="/investment-list" page={InvestmentListPage} name="investmentList" />
        <Route path="/product-list" page={ProductListPage} name="productList" />
        <Route path="/invoice-list" page={InvoiceListPage} name="invoiceList" />
        <Route path="/dashboard/{storeId}" page={DashboardPage} name="dashboard" />
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </Private>
      <Private wrap={SingleViewLayout} unauthenticated="home">
        <Route path="/business-list" page={BusinessListPage} name="businessList" />
        <Route path="/create-business" page={CreateBusinessPage} name="createBusiness" />
      </Private>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
