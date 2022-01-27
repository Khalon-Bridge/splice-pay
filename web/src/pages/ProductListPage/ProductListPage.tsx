import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProductListPage = () => {
  return (
    <>
      <MetaTags title="ProductList" description="ProductList page" />

      <h1>ProductListPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ProductListPage/ProductListPage.tsx</code>
      </p>
      <p>
        My default route is named <code>productList</code>, link to me with `
        <Link to={routes.productList()}>ProductList</Link>`
      </p>
    </>
  )
}

export default ProductListPage
