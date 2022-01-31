import BusinessStatusItem from './BusinessStatusItem'

export const active = () => {
  return <BusinessStatusItem label="ACTIVE" activeText="ACTIVE" />
}
export const disabled = () => {
  return <BusinessStatusItem label="DISABLED" activeText="ACTIVE" />
}

export default { title: 'Components/BusinessStatusItem' }
