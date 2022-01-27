import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InvoiceListPage = () => {
  return (
    <>
      <MetaTags title="InvoiceList" description="InvoiceList page" />

      <h1>InvoiceListPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/InvoiceListPage/InvoiceListPage.tsx</code>
      </p>
      <p>
        My default route is named <code>invoiceList</code>, link to me with `
        <Link to={routes.invoiceList()}>InvoiceList</Link>`
      </p>
    </>
  )
}

export default InvoiceListPage
