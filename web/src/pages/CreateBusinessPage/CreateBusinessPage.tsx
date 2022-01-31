import CreateBusinessForm from 'src/components/CreateBusinessForm/CreateBusinessForm'
import PageContent from 'src/components/PageContent/PageContent'
const PAGE_TITLE = 'New Business'

const CreateBusinessPage = () => {
  return (
    <PageContent metaTitle={PAGE_TITLE}>
      <CreateBusinessForm />
    </PageContent>
  )
}

export default CreateBusinessPage
