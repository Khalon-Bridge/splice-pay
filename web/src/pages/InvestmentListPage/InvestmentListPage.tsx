import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InvestmentListPage = () => {
  return (
    <>
      <MetaTags title="InvestmentList" description="InvestmentList page" />

      <h1>InvestmentListPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/InvestmentListPage/InvestmentListPage.tsx</code>
      </p>
      <p>
        My default route is named <code>investmentList</code>, link to me with `
        <Link to={routes.investmentList()}>InvestmentList</Link>`
      </p>
    </>
  )
}

export default InvestmentListPage
