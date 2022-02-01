/* eslint-disable react-hooks/exhaustive-deps */
import BusinessList from 'src/components/BusinessesCell'
import PageContent from 'src/components/PageContent/PageContent'
import { useAuth } from '@redwoodjs/auth'
import { useEffect } from 'react'
const PAGE_TITLE = 'Businesses'

const BusinessListPage = () => {
  const { currentUser } = useAuth()
  useEffect(() => {
    console.log(currentUser)

    return () => {
      //second;
    }
  }, [])

  return (
    <PageContent metaTitle={PAGE_TITLE}>
      <BusinessList />
    </PageContent>
  )
}

export default BusinessListPage
