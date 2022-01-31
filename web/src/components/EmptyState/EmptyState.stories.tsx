import EmptyState from './EmptyState'

export const success = () => {
  return <EmptyState success="Successfully message" action="proceed" />
}
export const error = () => {
  return <EmptyState error="Failed message" action="proceed" />
}

export default { title: 'Components/EmptyState' }
