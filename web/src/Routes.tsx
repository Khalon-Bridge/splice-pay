// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/investment-list" page={InvestmentListPage} name="investmentList" />
      <Route path="/product-list" page={ProductListPage} name="productList" />
      <Route path="/invoice-list" page={InvoiceListPage} name="invoiceList" />
      <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      <Route path="/home" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
