import PageSection from './PageSection'

const TITLE = 'Test Title'
const DESCRIPTION = 'Test Description'

export const generated = () => {
  return <PageSection description={DESCRIPTION} name={TITLE} />
}

export default { title: 'Components/PageSection' }
