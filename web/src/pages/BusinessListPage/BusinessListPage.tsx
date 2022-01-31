import BusinessList from 'src/components/BusinessesCell'
import PageContent from 'src/components/PageContent/PageContent'
const PAGE_TITLE = 'Businesses'

const BusinessListPage = () => {
  return (
    <PageContent metaTitle={PAGE_TITLE}>
      <BusinessList />
    </PageContent>
  )
}

export default BusinessListPage
